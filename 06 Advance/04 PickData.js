// Destructure the data in JS

const user = ["Shivaraj", 5, "Admin"];

// console.log(user[2]);

// var role = user[2];
// var name = user[0];

 var [name, courseCount, role] = user;                   // Destructing!

// console.log(role);

const Myuser = {
    name: "Shivaraj",
    courseCount: 5,
    role: "admin",
};

console.log(Myuser.role);

const {name, courseCount, role} = Myuser;
console.log(courseCount);