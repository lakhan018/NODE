// Core module -> HTTP
// 3rd party -> express
// question ->  asume you have to create a server using http / express to fetch messge in browser
// require is a fucntion
// var let cosnt (var -> gloabal scope (old) let -> local scope (new))
var http=require("http");
// http is module
// http.createServer(req,res);
http.createServer((req,res)=>{
    res.write("hello node js");
    res.end();
}).listen(3000);





// while setting a cookie we uses req
// when have to display a msg we uses response

// callback--> function inside a fucntion
// request and respnose are 2 objects

// createServer is fucntion
// ./ is for file