import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn: boolean = false;
  private loggedInAs:string |undefined = undefined;
  redirectUrl:string='/'

  constructor() { }
  isLoggedIn():boolean{
    return this.loggedIn
  }
  getLoginName():string | undefined{
    return this.loggedInAs;
  }

  login(loginAccount:string , password:string):boolean {
    this.loggedIn = (loginAccount === 'sascho' && password === "1qay2wsx")
    if(this.loggedIn){
      this.loggedInAs = loginAccount;
    } else {
      this.loggedInAs = undefined
    }
    return this.loggedIn;
  }
  logout():void{
    this.loggedIn = false
    this.loggedInAs = undefined
  }
}
