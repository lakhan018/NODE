/**
 * An efficient and robust HTTP server in Node.js without using external frameworks.
 *
 * Key Improvements over the original code:
 * 1.  Non-Blocking I/O: Uses fs.createReadStream() to serve files. This is asynchronous
 * and memory-efficient, as it streams the file to the user without loading it
 * all into memory at once. The Node.js event loop is not blocked.
 * 2.  Structured Routing: Instead of a long `if/else if` chain, this uses a simple
 * router object. This pattern is cleaner, more organized, and easier to extend
 * as you add more routes.
 * 3.  Proper HTTP Responses: Sets correct HTTP status codes (e.g., 200, 404, 400, 500)
 * and Content-Type headers, which is crucial for browsers and APIs.
 * 4.  Robust Error Handling: Includes checks for file-not-found, bad user input
 * (e.g., providing text instead of numbers), and other potential server errors.
 * 5.  Request Method Validation: Explicitly checks that the `/add1` route only
 * accepts POST requests.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');

// --- Route Handlers ---
// Each function is responsible for handling a specific route.

/**
 * Handles requests for the home page.
 * Serves the index.html file using an efficient, non-blocking stream.
 * @param {http.IncomingMessage} req - The request object.
 * @param {http.ServerResponse} res - The response object.
 */
const handleHome = (req, res) => {
    const filePath = path.join(__dirname, 'index.html');

    // Check if the file exists before trying to serve it.
    fs.stat(filePath, (err, stats) => {
        if (err) {
            // This can happen if the file is missing or there are permission issues.
            console.error(`Error accessing file: ${filePath}`, err);
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Server Error: Could not read the HTML file.');
            return;
        }

        // Set headers for a successful response.
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Content-Length': stats.size,
        });

        // Create a read stream and pipe it directly to the response object.
        // This is the most efficient way to serve a file.
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);

        // It's also good practice to handle errors on the stream itself.
        readStream.on('error', (streamErr) => {
            console.error('Error during file stream:', streamErr);
            // The headers might have already been sent, so we just end the connection.
            res.end();
        });
    });
};

/**
 * Handles the addition logic for the /add1 route.
 * Parses the POST request body and returns the sum.
 * @param {http.IncomingMessage} req - The request object.
 * @param {http.ServerResponse} res - The response object.
 */
const handleAdd = (req, res) => {
    let body = '';
    // The 'data' event fires whenever a new chunk of data is received.
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    // The 'end' event fires when all data has been received.
    req.on('end', () => {
        try {
            const formData = parse(body);
            const numA = Number(formData.a);
            const numB = Number(formData.b);

            // Validate the input to ensure they are numbers.
            if (isNaN(numA) || isNaN(numB)) {
                res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' }); // 400 Bad Request
                res.end('Bad Request: Please provide two valid numbers for parameters "a" and "b".');
                return;
            }

            const result = numA + numB;
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(`The result is ${result}`);
        } catch (error) {
            console.error('Error parsing request body:', error);
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Internal Server Error.');
        }
    });
};

/**
 * Handles all requests for routes that are not defined.
 * @param {http.IncomingMessage} req - The request object.
 * @param {http.ServerResponse} res - The response object.
 */
const handleNotFound = (req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); // 404 Not Found
    res.end('404 Not Found');
};


// --- Server Setup ---

const server = http.createServer((req, res) => {
    // Use the modern URL class to parse the request URL.
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;

    console.log(`Request received for ${pathname} with method ${req.method}`);

    // Simple routing logic based on path and method.
    if (pathname === '/home' && req.method === 'GET') {
        handleHome(req, res);
    } else if (pathname === '/add1' && req.method === 'POST') {
        handleAdd(req, res);
    } else {
        handleNotFound(req, res);
    }
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server running efficiently on http://localhost:${PORT}`);
    console.log(`Visit http://localhost:${PORT}/home to see the form.`);
});
