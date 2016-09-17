import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import BaseService from '../base.service';

@Injectable()
export class OurRiversService extends BaseService {

  private RIVER_API = 'https://data.gov.in/api/datastore/resource.json?resource_id=2' +
    'cfdb04a-e7e6-484b-8728-4cafbfe936e8&api-key=8064b14f9bd1e31d1e5a723a40b4fac1';

  constructor(protected _http: Http) {
    super(_http);
  }

  // overriding the base class to make it respond with the right key.
  protected _extractData(res: Response) {
    let rsData = res.json();
    return rsData.records || {};
  }

  getRiversData(): Observable<any> {
    return this.getAPIData(this.RIVER_API);
  }
}
