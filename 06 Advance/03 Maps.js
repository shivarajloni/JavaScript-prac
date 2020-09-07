// var boj = new Object
var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dso");
myMap.set(3, "krno");
myMap.set(4, "irl");
myMap.set(5, "Tres");

console.log(myMap);

// for(let key of myMap.keys()) {
//     console.log(`Key is ${key}`);
// }

// for(let value of myMap.values()) {
//     console.log(`Value is ${value}`);
// }

for(let [key, value] of myMap) {
    console.log(`Key is ${key} and value is ${value}`);
}

myMap.forEach( (value) => console.log(`${value}`));

// OR
myMap.forEach( (v, k) => console.log(`${v} and key is ${k}`));


myMap.delete(5);
console.log(myMap);