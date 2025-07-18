// import fs, { readdir } from "fs";
var fs = require('fs')
// import { fileURLToPath } from "url";
// fs.rename('x.json', 'tempData.json',
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("done");
//     }
//   });
//  delete cmd-> unlink
// fs.unlinkSync('d.txt')
// fs.unlink('deletefile',(err)=>{if else loop})

// fs.copyFileSync('rename1.js','temp.js')
// fs.copyFile("temp.js", "rename2.js", (err) => {
//   if (err) console.log(err);
// });


var d='ficinv'
// fs.appendFileSync('tempData.json',d);
// fs.appendFile('tempData.json',d,(err)=>{if(err){err}});

// fs.appendFileSync('tempData.json',fs.readFileSync('./one.js','utf-8'))
// fs.unlinkSync('tempData.json')



// path module
// import path from 'path'
var path=require('path')
var join=path.join(__dirname,'new')
fs.readdir(join,(err,files)=>{if(err){console.log(err)}else{console.log("read"+files);}})