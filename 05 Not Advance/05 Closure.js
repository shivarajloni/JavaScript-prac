// function init() {
//     var firstName = "Shivaraj";
//     function sayFirstName() {
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// // init();
// var value = init();

// value();


function doAddition(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = doAddition(6);
console.log(add5(5));


console.log(doAddition(8)(1));     // bcoz of closure, u can pass two references to a function