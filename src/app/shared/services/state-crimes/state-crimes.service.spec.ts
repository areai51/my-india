/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StateCrimesService } from './state-crimes.service';

describe('Service: StateCrimes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateCrimesService]
    });
  });

  it('should ...', inject([StateCrimesService], (service: StateCrimesService) => {
    expect(service).toBeTruthy();
  }));
});
