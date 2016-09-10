import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class BaseService {
  constructor(protected _http: Http) {

  }

  protected _extractData(res: Response) {
    let rsData = res.json();
    return rsData.data || {};
  }

  protected _handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

  protected getAPIData(apiLink: string) {
    return this._http.get(apiLink)
      .map(this._extractData)
      .catch(this._handleError);
  }
}
