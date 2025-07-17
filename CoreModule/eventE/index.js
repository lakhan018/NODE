var eventemitter=require("events");
var obj=new eventemitter();
obj.addListener("marketOpen",(msg)=>{console.log(msg)});
obj.addListener("marketOpen",(msg)=>{console.log(msg)});
// obj.addListener("WEATHER",(msg)=>{console.log(msg)});

obj.addListener("WEATHER",fun1);
obj.emit("marketOpen","helll ow");
obj.emit("Market","helll ow");
obj.emit("WEATHER",2);
obj.emit("WEATHER",1);

obj.removeListener('WEATHER',fun1);
obj.removeAllListener('WEATHER');
function fun1(n){console.log(n)};
// max listener =10
//  we can set the value to call it using setMaxListners