/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { RajyaSabhaService } from './rajya-sabha.service';

describe('Service: RajyaSabha', () => {
  beforeEach(() => {
    addProviders([RajyaSabhaService]);
  });

  it('should ...',
    inject([RajyaSabhaService],
      (service: RajyaSabhaService) => {
        expect(service).toBeTruthy();
      }));
});
