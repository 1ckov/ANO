function greeter(person: string): string {
  return "Hello, " + person;
}
let user: string = "Thomas Specht";
let fname: string = "Peter";
let lname: string = "Mayer";
document.body.innerHTML = greeter(`${fname + " " + lname}`);
console.log(`${fname}`);
