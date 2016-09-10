import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import BaseService from '../base.service';

@Injectable()
export class OurLeadersService extends BaseService {

  constructor(protected _http: Http) {
    super(_http);
  }

  getAttendance(sabha): Observable<any> {
    return this.getAPIData(sabha);
  }
}
