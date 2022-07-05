//Without default export
import Adress  from "./Adress";
export default class Client {
  //class cannot have methods,in order to be initiliasible using JSON arrays.
  fname: string;
  lname: string;
  adress?: Adress;
  constructor(fname: string, lname: string, adress?: Adress) {
    this.fname = fname;
    this.lname = lname;
    this.adress = adress;
  }
}
