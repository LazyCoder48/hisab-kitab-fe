/*
 * Copyright (c) 2024.
 * ajite created auth-fn.guard.ts
 * Project: hisab-kitab-fe | Module: hisab-kitab-fe
 */
import {CanActivateFn} from '@angular/router';

export const authFnGuard: CanActivateFn = (route, state) => {
  alert('authFnGuard');
  return true;
};
