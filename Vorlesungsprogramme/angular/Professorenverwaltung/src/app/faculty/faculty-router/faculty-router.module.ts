import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FacultyListComponent} from "../faculty-list/faculty-list.component";
import {RouterModule, Routes} from "@angular/router";
import {FacultyMainComponent} from "../faculty-main/faculty-main.component";
import {FacultyCreateComponent} from "../faculty-create/faculty-create.component";
import {FacultyEditComponent} from "../faculty-edit/faculty-edit.component";
import {AuthGuard} from "../../login/auth-guard";

const routes:Routes = [
  {
    path:'',
    component:FacultyMainComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    children:[
      {path:'',redirectTo:'list',pathMatch:'full'},
      {path:'list',component:FacultyListComponent},
      {path:'create',component:FacultyCreateComponent},
      {path:'edit/:shortel',component:FacultyEditComponent},
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FacultyRouterModule { }
