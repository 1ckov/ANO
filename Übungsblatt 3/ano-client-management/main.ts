// With default export on
import Client from "./Client.js";
import {
  BubleSort,
  BubleSortGeneric,
  BubleSortGenericLambda,
  closure_fname,
  closure_lname,
} from "./Sortieren.js";
let clients: Client[] = [
  {
    fname: "Thomas",
    lname: "Specht",
    adress: {
      street: "Paul-Wittsack-Straße",
      street_number: "10",
      postcode: 68163,
      city: "Mannheim",
    },
  },
  {
    fname: "Rainer",
    lname: "Gerten",
  },
  {
    fname: "Michael",
    lname: "Gröschel",
    adress: {
      street: "Schwetzinger Straße",
      street_number: "23",
      postcode: 68163,
      city: "Mannheim",
    },
  },
  {
    fname: "Willi",
    lname: "Hamster",
  },
  {
    fname: "Anna",
    lname: "Zuschauer",
  },
];

console.log(BubleSort(clients));
//console.log(BubleSortGeneric(clients));
console.log(BubleSortGenericLambda(clients, closure_lname));
console.log(BubleSortGenericLambda(clients, closure_fname));
