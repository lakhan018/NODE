// array
var a=[1,6,2,3,5];
a=a.filter((x)=>{if(x%2==0){return x}})
// console.log(a);
// sum returns boolean function
b=a.find((x)=>{return x>2})
console.log(b);
// return only one element

// 'every' function returns more element
a.every((x)=>{console.log(x)})