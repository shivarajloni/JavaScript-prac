var user = {
    firstName: "Shivaraj",
    lastName: "Loni",
    role: "Admin",
    loginCount: 32,
    facbookSignedIn: true,
    courseList: [],
        // Methods or functions in objects!! 
    buycourse: function (courseName) {
        this.courseList.push(courseName);
    },
        // Methods or functions in objects!! 
    getCourseCount: function () {
        return `hey! ${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buycourse("React JS course");
user.buycourse("Angular course");
console.log(user.getCourseCount());