/*
 * Copyright (c) 2024.
 * ajite created login.component.ts
 * Project: hisab-kitab-fe | Module: hisab-kitab-fe
 */
import {Component}      from '@angular/core';
import {AuthService}    from "../../services/auth/auth.service";
import {LoginRequest}   from "../../interfaces/auth/login-request";
import {AppResponse}    from "../../interfaces/app/app-response";
import {Users}          from "../../interfaces/users/users";
import {MessageService} from "primeng/api";
import {Router}         from "@angular/router";

@Component(
  {
    selector   : 'app-login',
    templateUrl: './login.component.html',
    styleUrl   : './login.component.scss'
  }
)

export class LoginComponent {
  username: string    = 'ajitesh.newnaha@outlook.com';
  password: string    = 'Pass@1234';
  rememberMe: boolean = false;

  constructor(private authService: AuthService, private messageService: MessageService, private router: Router) {}

  onLogin() {
    const loginData: LoginRequest = {username: this.username, password: this.password};
    this.authService.login(loginData).subscribe(
      {
        next    : (response: AppResponse) => {
          console.log(response);
          if (response && response.httpResponseCode === 200 && response.data) {
            const user: Users = response.data;
            console.log('response', response);
            if (response.jwt) {
              localStorage.setItem('rapd_jwt', JSON.stringify(response.jwt));
            }
            setTimeout(() => {
              this.authService.decodeJwt();
            }, 200);
            this.messageService.add(
              {
                key     : 'login-toast',
                severity: 'success',
                summary : `Login Successful (${response.httpResponseCode})`,
                detail  : response.httpResponseBody,
                life    : 3000
              }
            );
          } else {
            console.error('no proper response from backend');
            this.messageService.add(
              {
                key     : 'login-toast',
                severity: 'error',
                summary : 'No Response from the backend',
                life    : 3000
              }
            );

          }
        },
        error   : (error: any) => {
          console.log(error);
          this.messageService.add(
            {
              key     : 'login-toast',
              severity: 'error',
              summary : `${error.error.title} (${error.error.status})`,
              detail  : error.error.detail,
              life    : 5000
            }
          );
        },
        complete: () => {
          console.log("Login functionality completed");
        }
      }
    );

  }
}
