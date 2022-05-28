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
for(key in obj){
    //console.log(key);
}

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
console.log(findVal(obj, 3));