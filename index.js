"use strict";
console.log("Hello world");
let profs = ["Specht", "Gröschel", "Smits"];
for (let prof of profs) {
    console.log(prof);
}
function maxi(arr) {
    if (arr.length > 0) {
        let max = arr[0];
        for (let ele of arr) {
            if (ele) {
                if (ele > max) {
                    max = ele;
                }
            }
        }
        return max;
    }
    else {
        return undefined;
    }
}
let myArray = [4.0, 3.0, 1.4, 5.0];
console.log(maxi(myArray));
//# sourceMappingURL=index.js.map