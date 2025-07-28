var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");

http.createServer((req, res) => {
  if (req.url.startsWith("/home")) {
    console.log("dhnu");
    res.end(fs.readFileSync("index.html", "utf8"));
  }

  else if (req.url.startsWith("/add1")) {
    var body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      var q = querystring.parse(body);
      var b = q.b ;
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`SUCCESS LOGIN WITH ${b}`);
    });
  }

  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Page not found");
  }
}).listen(3000, () => {
  console.log("Server running on port 3000");
});
