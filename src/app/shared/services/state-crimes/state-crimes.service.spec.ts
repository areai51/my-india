/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { StateCrimesService } from './state-crimes.service';

describe('Service: StateCrimes', () => {
  beforeEach(() => {
    addProviders([StateCrimesService]);
  });

  it('should ...',
    inject([StateCrimesService],
      (service: StateCrimesService) => {
        expect(service).toBeTruthy();
      }));
});
