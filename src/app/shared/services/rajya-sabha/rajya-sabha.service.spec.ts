/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RajyaSabhaService } from './rajya-sabha.service';

describe('Service: RajyaSabha', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RajyaSabhaService]
    });
  });

  it('should ...', inject([RajyaSabhaService], (service: RajyaSabhaService) => {
    expect(service).toBeTruthy();
  }));
});
