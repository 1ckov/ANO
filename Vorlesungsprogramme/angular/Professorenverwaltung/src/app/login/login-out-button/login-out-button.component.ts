import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-out-button',
  templateUrl: './login-out-button.component.html',
  styleUrls: ['./login-out-button.component.css']
})
export class LoginOutButtonComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  login(): void { this.router.navigateByUrl('login'); }
  logout():void {
    this.loginService.logout();
    this.router.navigate(['../login'], {relativeTo:this.route})
  }


}
