/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AccidentInCitiesService } from './accident-in-cities.service';

describe('Service: AccidentInCities', () => {
  beforeEach(() => {
    addProviders([AccidentInCitiesService]);
  });

  it('should ...',
    inject([AccidentInCitiesService],
      (service: AccidentInCitiesService) => {
        expect(service).toBeTruthy();
      }));
});
