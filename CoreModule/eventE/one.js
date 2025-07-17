
import fs from 'fs'
// var fs = require("fs")
var json=`
{"name":"lakhan",
"age":"30",
"skills":["1","2",3],
"add":{"city":"patiala"}
}`
console.log(typeof(json))

console.log(typeof(JSON.parse(json)))
console.log((JSON.parse(json)))

console.log(JSON.stringify(json))

fs.readFileSync('x.json','utf8',()=>{console.log("read")})
