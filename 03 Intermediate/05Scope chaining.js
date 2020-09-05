var name = "Shivaraj";

console.log("Line number 3", name);

function sayName() {
    var name = "Mr S"
    console.log("Line number 7", name);

    sayNameTwo()

    function sayNameTwo(){
        // var name ="SL"
        console.log("Line number 12", name);

    }
}

sayName();