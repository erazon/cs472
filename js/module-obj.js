const methods = {};

methods.objToArr = function(obj){
    let result = [];
    for(let key in obj){
        if(obj[key] instanceof Array){
            result.push(key+flatArr(obj[key]));
        }
        else if(obj[key] instanceof Object){
            for(let key2 in obj[key]){
                result.push(""+key+key2+obj[key][key2]);
            }
        }
        else{
            result.push(""+key+obj[key]);
        }
    }
    return result;
};

function flatArr(arr){
    let str = "";
    for(let item of arr){
        str += item;
    }
    return str;
}

methods.minifyObj = function(arr){
    let result = [];
    for(let item of arr){
        for(let key in item){
            if(key == "a"){
                result.push({[key]:item[key]});
            }
        }
    }
    return result;
};

methods.findOldestPerson = function(arr){
    let oldestName = "";
    let oldestAge = -Infinity;
    for(let person of arr){
        if(person.age > oldestAge){
            oldestAge = person.age;
            oldestName = person.name;
        }
    }
    return oldestAge;
};

methods.findYoungest = function(arr){
    let youngestName = "";
    let youngestAge = Infinity;
    for(let person of arr){
        if(person.age < youngestAge){
            youngestAge = person.age;
            youngestName = person.name;
        }
    }
    return youngestName;
};

methods.findBetween = function(arr){
    for(let person of arr){
        if(person.age >= 16 && person.age <=17){
            return person;
        }
    }
};

module.exports = methods;