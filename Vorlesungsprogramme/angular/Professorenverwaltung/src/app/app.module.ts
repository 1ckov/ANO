import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRouterModule} from "./app-router/app-router.module";
import {RouterModule} from "@angular/router";
import {LoginModule} from "./login/login.module";
@NgModule({
  declarations: [
    AppComponent,

  ],
  // Top Level for Modules in this directory
  imports: [
    BrowserModule,
    RouterModule,
    LoginModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
