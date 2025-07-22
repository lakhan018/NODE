/*// then and catch personality
var fs = require("fs");
fs.readFile("one.js", "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data");
  }
  fs.writeFile("new/text.txt", "helo lakhan", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data written");
    }
    fs.readFile('new/text.txt','utf-8',(err,data)=>{if(err){console.log(err)}else{console.log(data)}})
  });

});*/
// using awasit

var fs = require('fs/promises')
/*async function processfile() {
    try {
        var x =  await fs.readFile('new/text.txt', 'utf-8');
        console.log(x);
   var Dtobewritten='hlo node js'
   await fs.writeFile('new/text.txt',Dtobewritten);
   var read= await fs.readFile('new/text.txt','utf-8');
   console.log(read)
    }
    catch(err){
        console.log(err);
    }
}
processfile()*/
// .then catch block ./



var r=fs.readFile('new/text.txt','utf-8')
.then((r)=>{console.log(r);return r;})
// .then(()=>((return fs.writeFile('new/text.txt',"heloo then moudle"))
.then(()=>{return fs.readFile('new/text.txt','utf-8')})
.then((finaldata)=>{console.log(finaldata)})