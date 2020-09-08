// ...args               // spread operator & Rest Operator (both)


var returnedValue = Math.max(2,7,5,4,9,8);
console.log(returnedValue);

var myObject = {};

Object.assign(myObject, {a:1, b:5, c:9,}, {z:9, x:7, y:8});
console.log(myObject);



function sumOne(a, b) {
    return a + b;
}
var myA = [5, 4];
// console.log(sumOne(5, 4));   // doesnt run (undefined)      console.log(sumOne(myA));

// console.log(sumOne(...myA));     // Spread Operator




function sumTwo(...args) {      // Rest Operator
    // console.log(args);         
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;                 // sum += arg;
    }
    return sum;
}

console.log(sumTwo(5, 8, 1, 2));




function sumTwo(a, b, ...args) {      // Rest Operator
    // console.log(args);     
    let multi = a * b;
    
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;                 // sum += arg;
    }
    return [multi, sum];
}

console.log(sumTwo(5, 8, 1, 2));
