import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

import { OurRivers } from './our-rivers';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


const ganga='https://data.gov.in/api/datastore/resource.json?resource_id=2cfdb04a-e7e6-484b-8728-4cafbfe936e8&api-key=8064b14f9bd1e31d1e5a723a40b4fac1'


@Injectable()
export class OurRiversService {

  constructor(private http: Http) { }


    private _extractFields(res: Response) {
      let rsData = res.json();

      return rsData.fields || {};
    }
    private _extractData(res: Response) {
      let rsData = res.json();

      return rsData.records || {};
    }

    private _handleError (error: any) {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }

getRiversData():Observable<any>{
  console.log('ganga')
  return this.http.get(ganga)
                      .map(this._extractData);
                      
}

}
