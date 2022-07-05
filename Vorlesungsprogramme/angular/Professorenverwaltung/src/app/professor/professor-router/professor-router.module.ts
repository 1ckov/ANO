import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfessorListComponent} from "../professor-list/professor-list.component";
import {RouterModule, Routes} from "@angular/router";
import {ProfessorMainComponent} from "../professor-main/professor-main.component";
import {ProfessorCreateComponent} from "../professor-create/professor-create.component";
import {ProfessorEditComponent} from "../professor-edit/professor-edit.component";
import {AuthGuard} from "../../login/auth-guard";
import {SaveChangesGuard} from "../../save-changes/save-changes.guard";

const routes:Routes = [
  {
    path:'',
    component:ProfessorMainComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    children:[
      {path:'',redirectTo:'list',pathMatch:'full'},
      {path:'list',component:ProfessorListComponent},
      {path:'create',component:ProfessorCreateComponent,canDeactivate:[SaveChangesGuard]},
      {path:'edit/:shortel',component:ProfessorEditComponent,canDeactivate:[SaveChangesGuard]},
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
export class ProfessorRouterModule { }
