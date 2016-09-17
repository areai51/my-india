/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OurLeadersService } from './our-leaders.service';

describe('Service: OurLeaders', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurLeadersService]
    });
  });

  it('should ...', inject([OurLeadersService], (service: OurLeadersService) => {
    expect(service).toBeTruthy();
  }));
});
