// import User from "./06ClasssJS";     // new method, basically used in all  new frameworks

const User = require("./06ClasssJS.js");     // most common to get details of fetching data from any file

const shivaraj = new  User("Shivaraj", "shivaraj@gmail.com");
// console.log(shivaraj.getInfo().email);
 console.log(shivaraj.getInfo());


 shivaraj.enrollCourse("React Bootcamp");
 shivaraj.enrollCourse("Angular Bootcamp");

 console.log(shivaraj.getCourseList());

 let courses = shivaraj.getCourseList();
 courses.forEach(c => console.log(c));
