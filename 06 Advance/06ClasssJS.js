class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;   
    }
    #courseList = [];

    getInfo() {
        return {name: this.name, email: this.email };
    }
    enrollCourse(name) {
        this.#courseList.push(name);
    }
    getCourseList() {
        return this.#courseList;
    }
}


module.exports = User;

// let shivaraj = User("Shivaraj", "shivaraj@gmail.com")








// Private Props getters & setters in JS
                            // "#" Let's you to use public and private, & allows getters and setters! 
const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("C++ Bootcamp");
console.log(rock.getCourseList());               // Uses Getters
// console.log(rock.courseList);                   // Same as above line 




