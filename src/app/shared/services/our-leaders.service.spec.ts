/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { OurLeadersService } from './our-leaders.service';

describe('Service: OurLeaders', () => {
  beforeEach(() => {
    addProviders([OurLeadersService]);
  });

  it('should ...',
    inject([OurLeadersService],
      (service: OurLeadersService) => {
        expect(service).toBeTruthy();
      }));
});
