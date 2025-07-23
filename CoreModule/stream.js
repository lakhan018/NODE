var fs = require("fs");
var zlib = require("zlib");
// var data='98u'
// var reader =fs.createReadStream('eventE/new/text.txt','utf8')
// reader.on('data',(x)=>{
//     data = data+x;
//     console.log(data)})

// reader.on('end',(err)=>{console.log(err)})
// // reader.on('end',(err)=>{console.log(err)})

// var data = "iuvnh8 ";
// var write1 = fs.createWriteStream("eventE/new/text.txt", () => {});
// write1.write(data, () => {
//   console.log("writing");
// });
// var data1=''
// var reader= fs.createReadStream("eventE/one.js");
// reader.setEncoding('utf8');
// reader.on('data',(chunk)=>{data1=chunk})
// reader.on('end',()=>console.log(data1))
// /*piping and unpiping*/
// var write1=fs.createWriteStream("example.txt")
// var reader = fs.createReadStream("eventE/new/text.txt")
// write1.on('pipe',()=>{
// console.log("piping")
// })
// reader.pipe(write1);
// var gzip=zlib.createGzip();

// var reader=fs.createReadStream('example.txt')
// var write1=fs.createWriteStream('example2.txt.gz')
// reader.pipe(gzip).pipe(write1)

var brotli=zlib.createBrotliCompress()
var reader = fs.createReadStream('example.txt')
var write =fs.createWriteStream("example.txt.gz")

reader.pipe(brotli).pipe(write)

var deflate=zlib.deflate()
var reader=fs.createReadStream('example.txt')
var write=fs.createReadStream('example.txt.gz')
reader.pipe(deflate).pipe(write)