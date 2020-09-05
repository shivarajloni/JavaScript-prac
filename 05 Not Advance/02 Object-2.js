var User = {
    name: "",
    getUserName: function() {
        console.log(`User Name is: ${this.name}`);
    },
};

var shivaraj = Object.create(User);
console.log(shivaraj);
shivaraj.name = "shivaraj Loni";
shivaraj.getUserName();
    // Objects
var sam = Object.create(User, {
    name: {value: "sammy"},
    courseCount: { value: 3},
});

sam.getUserName();
