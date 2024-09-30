/*
 * Copyright (c) 2024.
 * ajite created app.module.ts
 * Project: hisab-kitab-fe | Module: hisab-kitab-fe
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule}                       from './app-routing.module';
import {AppComponent}                           from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {provideAnimationsAsync}                 from '@angular/platform-browser/animations/async';
import {DropdownModule}                         from "primeng/dropdown";
import {ButtonModule}                           from "primeng/button";
import {RippleModule}                           from "primeng/ripple";
import {FormsModule, ReactiveFormsModule}       from "@angular/forms";
import {MenubarModule}                          from "primeng/menubar";
import {AuthModule}                             from "./auth/auth.module";
import {HttpClientModule}                       from "@angular/common/http";
import {HomeComponent}                          from './home/home.component';
import {ToastModule}                            from "primeng/toast";
import {MessageService}                         from "primeng/api";

@NgModule(
  {
    declarations: [
      AppComponent,
      HomeComponent
    ],
    imports     : [
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      AuthModule,
      RippleModule,
      DropdownModule,
      ButtonModule,
      FormsModule,
      MenubarModule,
      ToastModule
    ],
    providers   : [
      MessageService,
      {
        provide : LocationStrategy,
        useClass: HashLocationStrategy
      },
      provideAnimationsAsync()
    ],
    bootstrap   : [AppComponent]
  })
export class AppModule {}
