// import url from 'url'
var url = require("url")
var ad='https://google.com:3000/txt?a=34#'
var parse1=url.parse(ad,true)
console.log(parse1)

console.log(parse1.query)
console.log(parse1.search)