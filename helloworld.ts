function greeter(person: string):string {
    return "Hello, " + person
}
let user: string = "Thomas Specht"
let fname: string = 'Thomas'
let lname: string = 'Ihme'
document.body.innerHTML = greeter(`${fname + " " + lname}`)
console.log(`${fname}`)