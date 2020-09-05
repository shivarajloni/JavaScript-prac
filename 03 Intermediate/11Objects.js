var user = {
    firstName: "Shivaraj",
    lastName: "Loni",
    role: "Admin",
    loginCount: 32,
    facbookSignedIn: true
};

console.log(user.firstName);
console.log(user.loginCount);
console.log(user["lastName"]);


user.loginCount = 44;
console.log(user.loginCount);
console.table(user);