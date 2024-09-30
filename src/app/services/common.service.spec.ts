/*
 * Copyright (c) 2024.
 * ajite created common.service.spec.ts
 * Project: hisab-kitab-fe | Module: hisab-kitab-fe
 */
import {TestBed} from '@angular/core/testing';

import {CommonService} from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
