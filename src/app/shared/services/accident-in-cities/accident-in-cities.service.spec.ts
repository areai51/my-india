/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccidentInCitiesService } from './accident-in-cities.service';

describe('Service: AccidentInCities', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidentInCitiesService]
    });
  });

  it('should ...', inject([AccidentInCitiesService], (service: AccidentInCitiesService) => {
    expect(service).toBeTruthy();
  }));
});
