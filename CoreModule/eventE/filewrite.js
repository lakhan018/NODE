import fs from "fs";
var json = JSON.stringify(`{"name":"lakhan","age":"30","mark":"69"}`);
console.log("file  write sync");
fs.writeFileSync("filewrite.json", json);

fs.writeFile("filewriteaync.json", json, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(" sync written done");
  }
});

