/*
 * Copyright (c) 2024.
 * ajite created auth.service.ts
 * Project: hisab-kitab-fe | Module: hisab-kitab-fe
 */
import {Injectable}   from '@angular/core';
import {HttpClient}   from "@angular/common/http";
import {environment}  from "../../../environments/environment";
import {LoginRequest} from "../../interfaces/auth/login-request";
import {AppRequest}   from "../../interfaces/app/app-request";
import {AppResponse}  from "../../interfaces/app/app-response";
import {Users}        from "../../interfaces/users/users";
import {jwtDecode}    from "jwt-decode";

@Injectable({
              providedIn: 'root'
            })
export class AuthService {

  isLoggedIn: boolean = false;
  username: string    = '';

  constructor(private http: HttpClient) { }

  signup(data: Users) {
    let url                    = `${environment.API_URL}/auth/signup`;
    let appRequest: AppRequest = {
      data: data,
      jwt : null
    }
    return this.http.post<AppResponse>(url, appRequest);

  }

  login(data: LoginRequest) {
    let url                    = `${environment.API_URL}/auth/login`;
    let appRequest: AppRequest = {
      data: data,
      jwt : null
    }
    return this.http.post<AppResponse>(url, appRequest);
  }

  decodeJwt(): any {
    const jwt: string | null = JSON.parse(localStorage.getItem('rapd_jwt') || '{}');
    console.log(jwt);
    const payload = jwtDecode(jwt || '');
    console.log(payload);
    return payload;
  }

  validateJwt(): boolean {
    const jwt = this.decodeJwt();
    const now = new Date();
    console.log('token expires at', new Date(jwt.expiration));
    if (jwt && now.getTime() < jwt.expiration) {
      this.isLoggedIn = true;
      this.username   = jwt.username;
    } else {
      this.isLoggedIn = false;
      this.username   = '';
    }
    return this.isLoggedIn;
  }

}
