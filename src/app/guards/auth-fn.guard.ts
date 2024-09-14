import {CanActivateFn} from '@angular/router';

export const authFnGuard: CanActivateFn = (route, state) => {
  alert('authFnGuard');
  return true;
};
