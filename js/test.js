var test = "hello";
console.log(test);
var x;
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
console.log(test2(arr));

function find(a){
    for(let i=0;i<a.length;i++){
        if (a[i].length == 5)
            return a[i];
    }
}
console.log(find(arr));

function findIndex(a){
    for(let i=0;i<a.length;i++){
        if (a[i].length == 5)
            return i;
    }
}
console.log(findIndex(arr));
