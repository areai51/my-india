/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { OurRiversService } from './our-rivers.service';

describe('Service: OurRivers', () => {
  beforeEach(() => {
    addProviders([OurRiversService]);
  });

  it('should ...',
    inject([OurRiversService],
      (service: OurRiversService) => {
        expect(service).toBeTruthy();
      }));
});
