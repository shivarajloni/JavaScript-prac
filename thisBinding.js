const shivaraj = {
    firstName:  "Shivaraj",
    lastName: "Loni",
    role: "Admin",
    courseCount: 5,
    getInfo: function () {
        console.log(`
         First name is: ${this.firstName}
         Last name is: ${this.lastName}
         His name is: ${this.role}
         and is studying ${this.courseCount} courses
        `);
    },
};

getInfo                    // this is reference to the getInfo method
                            // where as "getInfo()" is calling a function!!

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
};
 
// shivaraj.getInfo();
// dj.getInfo();   

// shivaraj.getInfo.bind(dj);    //it just holds the reference, hence does't display anything (Nothing!)

// shivaraj.getInfo.bind(dj)();  // prints the values in the dj, i.e, since, now it points to dj and prints!!


var djInfo = shivaraj.getInfo.bind(dj);         // "bind" gives a refernce and then, we need to call it explicitly!!
djInfo();                                     // Both the above and this, are the same!!
                            // just storing it in the variable and then calling it!!


shivaraj.getInfo.call(dj);        // prints the values in dj!! as it  directly call's it! 