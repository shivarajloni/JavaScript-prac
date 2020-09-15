// When you run sort method on some array we get funcky result!!
// examples: execute in browser console!

[6, -2, 2, -7].sort();               // read the documentation: MDN- Array.prototype.sort()
                    // based on UTF-16

function mySort(a, b) {
    if(a > b){
        return 1;
    } else if(b > a) {
        return -1;
    } else {
        return 0;
    }
}

[6, -2, 2, -7].sort(mySort);        // does according to the function!        
