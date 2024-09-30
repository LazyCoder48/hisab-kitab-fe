/*
 * Copyright (c) 2024.
 * ajite created can-load.guard.ts
 * Project: hisab-kitab-fe | Module: hisab-kitab-fe
 */
import {CanActivateFn} from '@angular/router';
import {inject}        from "@angular/core";
import {CommonService} from "../services/common.service";
import {AuthService}   from "../services/auth/auth.service";

export const canLoadGuard: CanActivateFn = (route, state) => {
  const commonService: CommonService = inject(CommonService);
  const authService: AuthService     = inject(AuthService);
  if (state.url.endsWith("login")) {
    console.log(state.url);
    if (localStorage.getItem('rapd_jwt')) {

      if (authService.validateJwt()) {
        commonService.showToast(
          {
            key     : 'app-toast',
            severity: 'warning',
            summary : `You are already logged in!`
          }
        );
        return false;
      } else {
        localStorage.removeItem('rapd_jwt');
        return true;
      }
    }

  }
  return true;
};
