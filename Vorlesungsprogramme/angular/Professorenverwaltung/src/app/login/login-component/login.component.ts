import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string|undefined
  loginAccount:string|undefined
  password:string|undefined

  constructor(public loginService:LoginService, public router: Router) { }

  ngOnInit(): void {
    this.loginService.logout();
    this.message = 'You have been logged out.'
  }
  login():void {
    this.message = 'You have been logged out.';
    if (this.loginAccount && this.password){
      if(this.loginService.login(this.loginAccount,this.password)){
        this.message = 'You have been logged in.'
        this.router.navigateByUrl(this.loginService.redirectUrl)
      }else{
        this.message= 'Login or password not correct.'
      }
    }
  }
  logout():void{
    this.loginService.logout()
  }

}
