"use strict";
function greeter(person) {
    return "Hello, " + person;
}
let user = "Thomas Specht";
let fname = "Peter";
let lname = "Mayer";
document.body.innerHTML = greeter(`${fname + " " + lname}`);
console.log(`${fname}`);
//# sourceMappingURL=helloworld.js.map