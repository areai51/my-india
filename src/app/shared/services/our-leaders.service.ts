import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class OurLeadersService {

  constructor(private _http:Http) { }

private _extractData(res:Response){
  let rsData=res.json()
  console.log(rsData)
  return rsData.data ||{}
}
    private _handleError (error: any) {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }
    getAttendance(sabha): Observable<any> {
      return this._http.get(sabha)
                      .map(this._extractData)
                      .catch(this._handleError);
    }

}
