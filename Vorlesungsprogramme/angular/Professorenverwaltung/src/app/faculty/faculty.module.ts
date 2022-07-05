import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import {FormsModule} from "@angular/forms";
import {FacultyRouterModule} from "./faculty-router/faculty-router.module";
import {RouterModule} from "@angular/router";
import {FacultyMainComponent} from "./faculty-main/faculty-main.component";
import {FacultyCreateComponent} from "./faculty-create/faculty-create.component";
import {FacultyEditComponent} from "./faculty-edit/faculty-edit.component";
import {LoginModule} from "../login/login.module";


// Declaring faculty as NGModule, allows us to make it more atomic by defining a model, services and a component.
// Also allows for preconfiguration via JSON
// Ng Module declaration is done Here
@NgModule({
  // Which classes are declared in this module
  declarations: [
    FacultyListComponent,
    FacultyDetailsComponent,
    FacultyMainComponent,
    FacultyCreateComponent,
    FacultyEditComponent
  ],
  // Export following classes in this module
  exports:[
    FacultyListComponent,
    FacultyRouterModule
  ],
  // What modules this Module imports
  imports: [
    CommonModule,
    FormsModule,
    FacultyRouterModule,
    RouterModule,
    LoginModule

  ]
})
export class FacultyModule { }
