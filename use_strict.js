"use strict";

var user = {
    name: "Shivaraj",
    age: "21",
}
console.log(user);

Object.defineProperty(user, "gender", {
    value: "Male",
    enumerable: true,
    writable: false,
    configurable: false
})

delete user.gender
                // TypeError: Cannot delete property 'gender' of #