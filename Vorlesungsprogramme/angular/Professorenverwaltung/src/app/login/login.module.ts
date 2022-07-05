import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-component/login.component';
import { LoginOutButtonComponent } from './login-out-button/login-out-button.component';
import { FormsModule } from '@angular/forms';
import { LoginRouterModule } from './login-router/login-router.module';




@NgModule({
  declarations: [
    LoginComponent,
    LoginOutButtonComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    LoginRouterModule,
    LoginOutButtonComponent
  ]
})
export class LoginModule { }
