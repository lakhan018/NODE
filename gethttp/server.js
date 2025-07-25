var http=require("http");
var fs=require("fs");
var url=require("url")
// var express = require("express");
// var app=express();
http.createServer((req,res)=>{
    if(req.url.startsWith("/home")){
res.end(fs.readFileSync('index.html','utf8'));
// const a= req.query.a;
// const b= req.query.b;
}

else if (req.url.startsWith("/add1")){
    var p=url.parse(req.url,true)
        console.log(p);
        const q=p.query;
        const a=q.a;
        const b=q.b;
        const r=Number(a)+Number(b);
        console.log("working");
        // res.writeHead(200,{"content-type":"text/html"})
        res.end(r.toString());
}
else{console.log("not found")}
}).listen(3000,()=>{console.log("port working")})