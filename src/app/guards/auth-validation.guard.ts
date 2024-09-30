/*
 * Copyright (c) 2024.
 * ajite created auth-validation.guard.ts
 * Project: hisab-kitab-fe | Module: hisab-kitab-fe
 */
import {CanActivateFn} from '@angular/router';

export const authValidationGuard: CanActivateFn = (route, state) => {
  console.log(route, state);
  return true;
};
