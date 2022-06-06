// function hello(){
//     var x = 10;
// }
// hello();
// console.log(x);

let arr = ["apple", "banana", "pear"];
function test2(a){
    result = [];
    for(let i=0;i<a.length;i++){
        if (a[i].length > 4)
            result.push(a[i]);
    }
    return result;
}
//console.log(test2(arr));

function find(a){
    for(let i=0;i<a.length;i++){
        if (a[i].length == 5)
            return a[i];
    }
}
//console.log(find(arr));

function findIndex(a){
    for(let i=0;i<a.length;i++){
        if (a[i].length == 5)
            return i;
    }
}
//console.log(findIndex(arr));

let objArr = [{a:1,b:1}, {a:2,b:2}]
function sumOfArr(objArr){
    let sum = 0;
    objArr.forEach(element => {
        sum += element.b;
    });
    return sum;
}
//console.log(sumOfArr(objArr));
function reverseStr(str){
    let chars = str.split('');
    let len = str.length;
    let i = 0;
    while(i<(len/2)){
        let temp = chars[i];
        chars[i] = chars[len-i-1];
        chars[len-i-1] = temp;
        i++;
    }
    return chars.join('');
}
//console.log(reverseStr("string"));

let mA = ["apple", "banana"];
let result = mA.map((element, index, array)=> element.length >= 6);
//console.log(result);
let result2 = mA.filter((element, index, array)=> element.length >= 6);
//console.log(result2);
let result3 = mA.reduce(function(prev, element, index, array){
    return prev+element;
}, "");
//console.log(result3);
arr = [3,4,5];
result = arr.reduce((prev, element, index, array)=>{
    if(prev < element){
        prev = element;
    }
    return prev;
}, 0);
//console.log(result);

let arry = [{name:"peter",salary:100},{name:"alice",salary:200},{name:"sara",salary:400}];
result = arry.reduce((prev, element, index, array)=>{
    prev += element.salary;
    return prev;
}, 0);
//console.log(result);

result = arry.reduce((prev, element, index, array)=>{
    prev.totalSalary += element.salary;
    return prev;
}, {totalSalary:0});
//console.log(result);

arry = {a:1,b:2,c:3};
function getKeys(obj){
    let result = []
    for(let key in obj){
        result.push(key);
    }
    return result;
}
//console.log(getKeys(arry));

arr = [1, {a:1}, 3];
let arr2 = [];
for(let i=0;i<arr.length;i++){
    arr2.push(arr[i]);
}
arr3 = arr.map(x=>x);
arr2[1].a = 6;
arr3[1].a = 10;
//console.log(arr);

// clone an object
let obj = {a:1, b:"string", c:[1,2], d:{a:1,b:2}};
obj2 = {};
for(key in obj){
    obj2[key] = obj[key];
}
obj2.a=5;
//console.log(obj);

// another way to clone an object
//obj3 = Object.assign({}, obj);
//obj3.a=10;
//console.log(obj);

// another way to clone an object
// obj4 = {...obj};
// obj4.a=15;
// console.log(obj);

// find an element
obj = {a:1, b:"string", c:[1,2]};
function findVal(obj, val){
    for(key in obj){
        if(Array.isArray(obj[key])){
            for(key2 in obj[key]){
                if(obj[key][key2] == val) return true;
            }
        }
        else{
            if(obj[key] == val) return true;
        }
    }
    return false;
}
//console.log(findVal(obj, 3));


/*function test3(){
    //x = 4;
    console.log(x);
    if(x>1){
        var x = 3;
    }
    var x = 9;
    let y = 10;
    {
        let y = 20;
    }
    console.log(y);
    console.log(x);
}
var x = 5;
test3();
console.log(x);*/
let x = 10;
function test4(){
    //console.log(x);
}
test4();
let obj1 = {a:1, b:{c:2}};
let obj3 = {...obj1};
obj1.b.c = 10;
//console.log(obj1, obj3);

let arr4 = [{a:1,b:2}, {c:3,d:4}];
let arr5 = []
arr4.forEach(function(item, idx){
    //console.log(idx, item);
    arr5.push({...item});
});
arr4[0].a = 10;
//console.log(arr4, arr5);

function test5(a, b, ...other){
    //console.log(arguments);
    for(let i=0;i<arguments.length;i++){
        //console.log(arguments[i]);
    }
    /*arguments.forEach(function(idx, item){
        console.log(item);
    });*/
    //console.log(a,b);
    //console.log(other);
}
test5(1,'str',3,4);
let obj5 = {a:1, b:2, a:2};
const {a,b} = obj5;
//console.log(obj5, a,b);

var x1 = 10;
function test6(){
    //console.log(x1);
    x1 = 2;
    if(x1>1){
        var x1 = 4;
        let x2 = 9;
    }
    //console.log(x2); // error
    //console.log(x1);
}
test6();
var x3=10;
var f1 = function(){
    //console.log(x3);
}
f1();

// create an object and returns sum of the properties
obj = {a:1, b:2, c:function(){
    return this.a + this.b;
}};
//console.log(obj.c());

const c1 = {a:1, b:2};
let c2 = c1;
c2.c = 10;
//console.log(c1);

sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue)=>accumulator + currentValue.x,0);
//console.log(sum);

sum = [1, 2, 3, 4].reduce((accumulator, currentValue)=>accumulator+currentValue);
// console.log(sum);

function foo() {
    x = 4;
    //console.log(x);
}
foo();
//console.log(x);

function a1() {
    // console.log(x2); // consult Global for x and print 20 from Global
}
function b1() {
    var x2 = 10;
    a1(); // consult Global for a
}
var x2 = 20;
b1();

function b2() {
    function a() {
        //console.log(x3);
    }
    var x3 = 10;
    a();
}
var x3 = 20;
b2();

// function f() {
//     var a = 1, b = 20, c;
//     console.log(a + " " + b + " " + c);
//     function g() {
//     var b = 300, c = 4000;
//     console.log(a + " " + b + " " + c);
//     a = a + b + c;
//     console.log(a + " " + b + " " + c);
//     }
//     console.log(a + " " + b + " " + c);
//     g();
//     console.log(a + " " + b + " " + c);
// }
// f();

// var x4 = 10;
// function main(){
//     console.log("x1 is:"+ x4);
//     x4 = 20;
//     console.log("x2 is:" + x4);
//     if(x>0){
//         var x4 = 30;
//         console.log("x3 is:"+ x4);
//     }
//     console.log("x4 is:"+ x4);
//     var x4 = 40;
//     var f = function(x4){
//         console.log("x5 is:"+ x4);
//     };

//     f(50);
//     console.log("x6 is:"+ x4);
// }
// main();
// console.log("x7 is:"+ x4);

// console.log(this);
// function foo(){
//     console.log(this);
// }
// foo();
function sayHi() {
    //console.log(this);
}
sayHi();

// constructor example
// function user(name){
//     this.name = name;
// }
// let u1 = new user("John");
// console.log(u1.name);

/*function Person(){
    console.log(this);
    this.university = "MIU";
    this.year = 2022;
}
const faculty1 = new Person();
Person.prototype.greet = function(){
    return "Hi, " + this.university + "!";
}
const greeting = faculty1.greet();
console.log(greeting);*/