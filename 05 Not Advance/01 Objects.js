var User = function (firstName, courseCount){
    this.firstName = firstName;                        // defining Objects
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function(){
    console.log(`Your firstname is: ${this.firstName}`);
}

var shivaraj = new User("Shivaraj", 2);
shivaraj.getCourseCount();
shivaraj.getFirstname();


// console.log(shivaraj);

var sam = new User("sam", 1);
sam.getCourseCount();
sam.getFirstname();
// console.log(sam);