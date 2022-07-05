export default class Adress {
  street: string;
  street_number: string;
  postcode: Number;
  city: string;
  constructor(
    street: string,
    street_number: string,
    postcode: Number,
    city: string
  ) {
    this.street = street;
    this.street_number = street_number;
    this.city = city;
    this.postcode = postcode;
  }
}
