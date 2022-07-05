import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {SaveChangesInterface} from "./save-changes-interface";

@Injectable({
  providedIn: 'root'
})
export class SaveChangesGuard implements CanDeactivate<SaveChangesInterface> {
  canDeactivate(component:SaveChangesInterface,
    currentRoute:ActivatedRouteSnapshot,
    currentState:RouterStateSnapshot,
    nextState?:RouterStateSnapshot):boolean{
    if(component.hasUnsavedChanges()){
      return confirm('Are you sure you want to leave without saving changes')
    }else {
      return true;
    }
  }

}
