var cars = ["Peugeot", "Mercedes", "BMW", "Audi"];
document.getElementById("test").innerHTML = cars;

function myFunction() {
 cars.sort();
 document.getElementById("test").innerHTML = cars;
}