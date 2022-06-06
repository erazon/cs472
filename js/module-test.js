let arrModule = require('./module-arr.js');
console.log(arrModule.findOdd([2,3,4]));
console.log(arrModule.findEven([2,3,4]));
console.log(arrModule.findDiv4([2,3,4]));
console.log(arrModule.findOddSum([2,3,4]));
console.log(arrModule.findEvenSum([2,3,4]));
console.log(arrModule.findDiv4Sum([2,3,4]));
console.log(arrModule.findUnique([2,3,4]));
console.log(arrModule.printType([50,"apple",{a:1}]));
console.log(arrModule.destructureArr([50,"apple",{a:1}]));
console.log(arrModule.firstOddIdx([2,3,4]));
console.log(arrModule.strToArr("hello"));
console.log(arrModule.arrToStr(["h","i"]));

let objModule = require('./module-obj');
console.log(objModule.objToArr({a:1,b:[1,2],c:"string",d:{x:1,y:2}}));
console.log(objModule.minifyObj([{a:1,b:2},{a:2,b:4}]));
console.log(objModule.findOldestPerson([{name:"Ram",age:20},{name:"Lakshman",age:15}]));
console.log(objModule.findYoungest([{name:"Ram",age:20},{name:"Lakshman",age:15}]));
console.log(objModule.findBetween([{name:"Ram",age:20},{name:"Lakshman",age:16}]));