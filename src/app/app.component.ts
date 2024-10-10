/*
 * Copyright (c) 2024.
 * ajite created app.component.ts
 * Project: hisab-kitab-fe | Module: hisab-kitab-fe
 */

import {Component, OnInit}            from '@angular/core';
import {Event, NavigationEnd, Router} from "@angular/router";
import {ThemePickerService}           from "./services/theme-picker.service";
import {AuthService}                  from './services/auth/auth.service';
import {AppResponse}                  from './interfaces/app/app-response';
import {AppRequest}                   from './interfaces/app/app-request';

@Component(
  {
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrl   : './app.component.scss'
  }
)
export class AppComponent implements OnInit {

  title                                          = 'hisaab kitaab';
  isLoggedIn: boolean                            = false;
  onLoginOrSignup: boolean                       = false;
  onLoginPage: boolean                           = false;
  onSignupPage: boolean                          = false;
  selectedTheme: { name: string, value: string } = {
    name : '',
    value: ''
  };
  themes: { name: string, value: string }[]      = [
    {name: 'md-light-indigo', value: 'md-light-indigo'},
    {name: 'arya-blue', value: 'arya-blue'},
    {name: 'md-dark-indigo', value: 'md-dark-indigo'},
    {name: 'saga-blue', value: 'saga-blue'},
    {name: 'vela-blue', value: 'vela-blue'}
  ];

  constructor(private router: Router, private themePickerService: ThemePickerService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    console.log('App Component Initialized');
    this.detectCurrentRoute();
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.detectCurrentRoute();
      }
    })
  }

  detectCurrentRoute(): void {
    this.onLoginOrSignup = this.router.url.includes('login') || this.router.url.includes('signup');
    this.onLoginPage     = this.router.url.includes('login');
    this.onSignupPage    = this.router.url.includes('signup');
    setTimeout(() => {
      if (!this.authService.jwt) {
        console.log('token is not available');
      } else {
        console.log(this.authService.userData, this.authService.jwt)
      }
      this.isLoggedIn = this.authService.isLoggedIn;
      console.log('200', this.isLoggedIn);
    }, 200);
    console.log('0', this.isLoggedIn);
  }

  changeTheme() {
    this.themePickerService.switchTheme(this.selectedTheme.value);
  }

  logout() {
    let appRequest: AppRequest = {
      data: this.authService.userData,
      jwt : JSON.parse(<string>localStorage.getItem('rapd_jwt'))
    }
    this.authService.logout(appRequest).subscribe(
      {
        next : (response: AppResponse) => {
          console.log(response);
          if (response.httpResponseCode === 200) {
            this.authService.userData = {};
            this.authService.jwt      = '';
            this.isLoggedIn           = false;
            this.detectCurrentRoute();
          }
        },
        error: (error: any) => {
          console.error("error", error);
        }
      });
  }

}
