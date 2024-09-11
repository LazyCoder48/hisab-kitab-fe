import {NgModule}                         from '@angular/core';
import {CommonModule}                     from '@angular/common';
import {LoginComponent}                   from './login/login.component';
import {AuthRoutingModule}                from "./auth-routing.module";
import {SignupComponent}                  from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule}                   from "primeng/checkbox";
import {InputTextModule}                  from "primeng/inputtext";
import {ButtonModule}                     from "primeng/button";
import {FloatLabelModule}                 from "primeng/floatlabel";
import {ButtonGroupModule}                from "primeng/buttongroup";
import {ToastModule}                      from "primeng/toast";
import {MessageService}                   from "primeng/api";
import {HTTP_INTERCEPTORS}                from "@angular/common/http";
import {JwtInterceptor}                   from "../interceptor/jwt/jwt.interceptor";
import {ActivatorComponent}               from '../activator/activator.component';
import {AuthService}                      from "../services/auth/auth.service";


@NgModule(
  {
    declarations: [
      LoginComponent,
      SignupComponent,
      ActivatorComponent
    ],
    imports     : [
      CommonModule,
      AuthRoutingModule,
      FormsModule,
      CheckboxModule,
      InputTextModule,
      ButtonModule,
      FloatLabelModule,
      ButtonGroupModule,
      ReactiveFormsModule,
      ToastModule
    ],
    providers   : [
      AuthService,
      MessageService,
      {
        provide : HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi   : true
      }
    ]
  })
export class AuthModule {}
