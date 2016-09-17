import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { OurLeadersModel, IOurLeaders, OurLeadersState } from './our-leaders.model';
import BaseService from '../base.service';

@Injectable()
export class OurLeadersService extends BaseService {

  constructor(protected _http: Http) {
    super(_http);
  }

  private _apiUrlLokSabha: string = 'https://data.gov.in/node/85987/datastore/export/json';
  private _apiUrlRajyaSabha: string = 'https://data.gov.in/node/982241/datastore/export/json';

  /**
   * Utility to shorten other calls
   * Call all function keys on passed in list
   */
  private _objectBasedMap = (objectMap: any) =>
    (dataList: any, fieldList: any, refId: number) =>
      dataList.map((data) =>
        Object.keys(objectMap).reduce((memo, key) => {
          memo[key] = objectMap[key].apply(objectMap, [data, fieldList, refId]);
          return memo;
        }, {}));

  private _simpleData = this._objectBasedMap(OurLeadersModel);
  private _transformedData = (data: any, fields: any, refId: number) => {
    return this._simpleData(data, fields, refId);
  };

  protected _extractData(res: Response) {
    let rsData = res.json();
    return rsData || {};
  };

  getAttendance(sabhaStateId: number): Observable<any> {
    const apiUrl = (sabhaStateId === OurLeadersState.RAJYASABHA) ? this._apiUrlRajyaSabha : this._apiUrlLokSabha;
    const lastMoment = (response: IOurLeaders) => this._transformedData(response.data, response.fields, sabhaStateId);
    return this.getAPIData(apiUrl).map(lastMoment);
  }
}
