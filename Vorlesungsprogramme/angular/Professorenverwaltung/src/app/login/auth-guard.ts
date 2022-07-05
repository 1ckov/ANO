import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "./login.service"

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private loginService: LoginService, private router: Router) { }

  checkLogin(url:string):boolean{
    if(this.loginService.isLoggedIn()){
      return true;
    }else {
      // Save Current fora  later redirect
      this.loginService.redirectUrl=url;
      this.router.navigateByUrl('/login')
      return false;
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url:string = state.url
    return this.checkLogin(url)
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url:string = state.url
    return this.checkLogin(url)
  }

}
