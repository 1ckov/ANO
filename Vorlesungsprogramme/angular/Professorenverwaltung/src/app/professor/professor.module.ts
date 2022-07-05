import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { ProfessorDetailsComponent } from './professor-details/professor-details.component';
import {FormsModule} from "@angular/forms";
import {ProfessorRouterModule} from "./professor-router/professor-router.module";
import { ProfessorCreateComponent } from './professor-create/professor-create.component';
import { ProfessorEditComponent } from './professor-edit/professor-edit.component';
import {ProfessorMainComponent} from "./professor-main/professor-main.component";
import {RouterModule} from "@angular/router";
import {LoginModule} from "../login/login.module";


// Declaring professor as NGModule, allows us to make it more atomic by defining a model, services and a component.
// Also allows for preconfiguration via JSON
// Ng Module declaration is done Here
@NgModule({
  // Which classes are declared in this module
  declarations: [
    ProfessorListComponent,
    ProfessorDetailsComponent,
    ProfessorMainComponent,
    ProfessorCreateComponent,
    ProfessorEditComponent
  ],
  // Export following classes in this module
  exports:[
    ProfessorListComponent,
    ProfessorRouterModule
  ],
  // What modules this Module imports
  imports: [
    CommonModule,
    FormsModule,
    ProfessorRouterModule,
    RouterModule,
    LoginModule

  ]
})
export class ProfessorModule { }
