/*
 * Copyright (c) 2024.
 * ajite created auth-routing.module.ts
 * Project: hisab-kitab-fe | Module: hisab-kitab-fe
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent}       from "./login/login.component";
import {SignupComponent}      from "./signup/signup.component";
import {canLoadGuard}         from "../guards/can-load.guard";

const routes: Routes = [
  {
    path       : 'login',
    component  : LoginComponent,
    canActivate: [canLoadGuard]
  },
  {
    path     : 'signup',
    component: SignupComponent
  }
];

@NgModule({
            imports: [
              RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
          })
export class AuthRoutingModule {}
