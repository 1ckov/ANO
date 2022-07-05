import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, PreloadAllModules, Routes} from "@angular/router";
import {ProfessorListComponent} from "../professor/professor-list/professor-list.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  //{path:'professor', redirectTo:'professor',pathMatch:'full'},
  //{path:'list', component:ProfessorListComponent},
  {path:'',pathMatch:'full', component:EmptyComponent},
  {path:'professors',
  loadChildren:async() => {
    return (await import('../professor/professor.module')).ProfessorModule;
  }
  },
  {path:'facultys',
    loadChildren:async() => {
      return (await import('../faculty/faculty.module')).FacultyModule;
    }
  },
  {path:'**', component:PageNotFoundComponent},
]

@NgModule({
  declarations: [PageNotFoundComponent, EmptyComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})
  ],

})
export class AppRouterModule { }
