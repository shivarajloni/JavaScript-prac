// Event loop in JS, basically the Async model in JS, using MDN(Mozilla Developer Network)


const uno = () => {                 // Arrow Function
    console.log("I am One");
};

const dos = () => {       
    setTimeout(() => {
        console.log("Wooohhhooooo!");
    }, 3000);                      
    console.log("I am Two");
};

const tres = () => {                 
    console.log("I am Three");
};

// uno();
// tres();
// dos();

uno();
dos();
tres();