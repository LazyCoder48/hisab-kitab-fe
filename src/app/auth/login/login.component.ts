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
    localStorage.removeItem('rapd_jwt');
    this.authService.login(loginData).subscribe(
      {
        next    : (response: AppResponse) => {
          console.log(response);
          if (response && response.httpResponseCode === 200 && response.data) {
            const user: Users = response.data;
            localStorage.setItem('rapd_jwt', response.jwt);
            this.authService.decodeJwt();
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
              summary : `${error.name} (${error.status})`,
              detail  : error.statusText,
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
