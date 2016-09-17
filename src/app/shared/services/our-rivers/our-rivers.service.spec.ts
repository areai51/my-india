/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OurRiversService } from './our-rivers.service';

describe('Service: OurRivers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurRiversService]
    });
  });

  it('should ...', inject([OurRiversService], (service: OurRiversService) => {
    expect(service).toBeTruthy();
  }));
});
