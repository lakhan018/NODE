/*var http = require("http");
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
 *//*

var http = require("http")
var fs=require("fs")
var querystring=require("querystring")
http.createServer((req,res)=>{


 var x= fs.readFile('index.html',(data,err)=>{
  if(err){
  console.log(err);}
  else{
    var y=x;
    console.log(data)}

res.end(y.toString());  });



  }).listen(3000,console.log("port working "))*/
  var http = require("http");
var fs = require("fs");

http.createServer((req, res) => {
  if (req.url === "/home") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Page not found");
  }
}).listen(3000, () => {
  console.log("Server running on port 3000");
});
