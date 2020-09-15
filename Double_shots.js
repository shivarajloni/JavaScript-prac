const google = "google";
const fb = null;                // a "falsy" value


if (google) {
    console.log("I execute - BLOCK 1");
}

if (fb) {                           // considered as a falsy!!   make it: (!fb) -> not falsy == true(not falsy), which is now a "Boolean"
    console.log("I execute - BLOCK 2");
}

// if (!fb) {                      // Reverse Logic begin applied.
//     console.log("I execute - BLOCK 2");
// }


if (!!fb) {                             // Double-shots (best pratice), look at documentation (Airbnb)
    console.log("I execute - BLOCK 2");
}
