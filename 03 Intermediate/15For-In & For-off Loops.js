const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];

for(const n of names){
    console.log(n);
}

const symbols = {
    yt: "youtube",
    ig: "Instagram",
    fb: "facebook",
    lco: "Learn code online"
}

for(const n in symbols){
  //  console.log(symbols[n]);
    console.log(`Key is : ${n} and value is: ${symbols[n]}`);
}