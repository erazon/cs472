const methods = {};

methods.findOdd = function(arr){
    let result = [];
    for(let item of arr){
        if((item % 2) != 0){
            result.push(item);
        }
    }
    return result;
};

methods.findEven = function(arr){
    let result = [];
    for(let item of arr){
        if((item % 2) == 0){
            result.push(item);
        }
    }
    return result;
};

methods.findDiv4 = function(arr){
    let result = [];
    for(let item of arr){
        if((item % 4) == 0){
            result.push(item);
        }
    }
    return result;
};

methods.findOddSum = function(arr){
    let sum = 0;
    for(let item of arr){
        if((item % 2) != 0){
            sum += item;
        }
    }
    return sum;
};

methods.findEvenSum = function(arr){
    let sum = 0;
    for(let item of arr){
        if((item % 2) == 0){
            sum += item;
        }
    }
    return sum;
};

methods.findDiv4Sum = function(arr){
    let sum = 0;
    for(let item of arr){
        if((item % 4) == 0){
            sum += item;
        }
    }
    return sum;
};

methods.findUnique = function(arr){
    let result = [];
    for(let item of arr){
        if(result.indexOf(item) == -1){
            result.push(item)
        }
    }
    return result;
};

methods.printType = function(arr){
    let result = [];
    for(let item of arr){
        result.push(typeof item);
    }
    return result;
};

methods.destructureArr = function(arr){
    let result = {};
    for(let i=0;i<arr.length;i++){
        result[typeof arr[i] + i] = arr[i];
    }
    return result;
};

methods.firstOddIdx = function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 != 0) return i;
    }
};

methods.strToArr = function(str){
    let result = [];
    for(let i=0;i<str.length;i++){
        result.push(str.charAt(i));
    }
    return result;
};

methods.arrToStr = function(arr){
    let str = "";
    for(let i=0;i<arr.length;i++){
        str += arr[i];
    }
    return str;
};

module.exports = methods;