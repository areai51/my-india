import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RajyaSabha } from './rajya-sabha';
import { Observable } from 'rxjs/Observable';
import BaseService from '../base.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class RajyaSabhaService extends BaseService {

  private RAJYA_SABHA_API = 'https://data.gov.in/node/982241/datastore/export/json';

  constructor(protected _http: Http) {
    super(_http);
  }

  getAttendance(): Observable<RajyaSabha[]> {
    return this.getAPIData(this.RAJYA_SABHA_API);
  }

}
