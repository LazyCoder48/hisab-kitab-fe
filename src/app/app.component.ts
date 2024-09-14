/*
 * Copyright (c) 2024.
 * ajite created app.component.ts
 * Project: hisab-kitab-fe | Module: hisab-kitab-fe
 */

import {Component, OnInit}            from '@angular/core';
import {Event, NavigationEnd, Router} from "@angular/router";
import {ThemePickerService}           from "./services/theme-picker.service";

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
    {name: 'arya-blue', value: 'arya-blue'},
    {name: 'md-dark-indigo', value: 'md-dark-indigo'},
    {name: 'md-light-indigo', value: 'md-light-indigo'},
    {name: 'saga-blue', value: 'saga-blue'},
    {name: 'vela-blue', value: 'vela-blue'}
  ];

  constructor(private router: Router, private themePickerService: ThemePickerService) {
    if (!localStorage.getItem('rapd_jwt')) {
      console.log('token is not available');
    }
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
  }

  changeTheme() {
    this.themePickerService.switchTheme(this.selectedTheme.value);
  }

}
