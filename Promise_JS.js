const uno = () => {                 // Arrow Function
    return "I am One";
};

// const dos = () => {       // use "async" which brings in the data and let's u knw that its un-defined
//     setTimeout(() => {
//         return "I am Two";
//     }, 3000);                      
// };

const dos = () => {       
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am Two");                    // resolve 
        }, 3000);
    });                     
};

const tres = () => {                 
    return "I am Three";
};

const callMe = async () => {                // Async
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();               // Await
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);    
};

callMe();