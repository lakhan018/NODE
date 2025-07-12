// import {readFile,readFileSync} from "fs";
/*const data = readFile('./Unit1/data.json','utf-8', (err,data) => {
    if(err) {console.log(err); return;}
    console.log("executing"+data);
});
console.log(data);
const data2 = readFileSync('./Unit1/data.json','utf-8');
console.log(data2);
// readFile is async and readFileSync is sync
*//*

import { readFile, readFileSync } from "fs";
// readFile is async
readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error reading JSON file:", err);
        return;
    }
    console.log("Async read (data.json):", data);
});

// readFileSync is sync
const data2 = readFileSync('data.json', 'utf-8');
console.log("Sync read (data.json):", data2);



const jsparsed= JSON.parse(data2);
console.log("Parsed JSON data:", jsparsed);
// json.parse is used to convert JSON string to JS object


// Example of using JSON.stringify to convert JS object to JSON string
const jsObject = { name: "lakhan", age: 20, city: "MH", country: "India" };
const jsonString = JSON.stringify(jsObject);
console.log("JSON string:", jsonString);
// just checking
*/
import fs from 'fs';
// Read file asynchronously with callback
fs.readFile('notes.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// // For binary data (like images), omit the encoding
// fs.readFile('image.png', (err, data) => {
//   if (err) throw err;
//   // data is a Buffer containing the file content
//   console.log('Image size:', data.length, 'bytes');
// });.c