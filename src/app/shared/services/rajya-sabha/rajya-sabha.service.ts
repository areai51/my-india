import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RajyaSabha } from './rajya-sabha';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class RajyaSabhaService {

    constructor(private _http: Http) { }

    private _rajyaSabhaApiUrl = 'https://data.gov.in/node/982241/datastore/export/json';

    private _extractData(res: Response) {
      let rsData = res.json();

      return rsData || {};
    }

    private _handleError (error: any) {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }

    getAttendance(): Observable<RajyaSabha[]> {
      return this._http.get(this._rajyaSabhaApiUrl)
                      .map(this._extractData)
                      .catch(this._handleError);
    }

  }
