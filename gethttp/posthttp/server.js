var http=require("http");
var fs=require("fs");
var url=require("url")
var querystring=require("querystring")
// var express = require("express");
// var app=express();
http.createServer((req,res)=>{
    if(req.url.startsWith("/home")){
        console.log("home page")
res.end(fs.readFileSync('index.html','utf8'));
}
else if(req.url.startsWith('/add1')){

var body=''
req.on('data',(chunk)=>{body+=chunk.toString();})

req.on('end',()=>{var  q=querystring.parse(body)
    const result = Number(q.a)+Number(q.b);
    res.end(`result is ${result}`)
}
)

}
else{console.log("not found")}
}).listen(4000,()=>{console.log("port working")})