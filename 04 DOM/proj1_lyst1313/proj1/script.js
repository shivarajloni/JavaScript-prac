// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");

// var count = 1;
 
// setInterval( () => {
//    if (count < 1000) {
//     count++;
//     counter.innerText = count;
//    } 
// }, 1);

// setTimeout( () => {
//     followers.innerText = "Followers in Instagram!";
// }, 5000);


var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

// counter.innerHTML = 1001;

let count = 1;

setInterval(() => {
   if (count < 1000) {
    count++;
    counter.innerText = count;
   }
}, 1);

setTimeout(() => {
    followers.innerText = "Followers on Instagram!";
}, 5000);
