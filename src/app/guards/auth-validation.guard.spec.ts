/*
 * Copyright (c) 2024.
 * ajite created auth-validation.guard.spec.ts
 * Project: hisab-kitab-fe | Module: hisab-kitab-fe
 */
import {TestBed}       from '@angular/core/testing';
import {CanActivateFn} from '@angular/router';

import {authValidationGuard} from './auth-validation.guard';

describe('authValidationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authValidationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
