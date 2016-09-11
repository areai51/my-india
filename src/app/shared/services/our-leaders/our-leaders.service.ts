import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { OurLeadersModel, IOurLeaders, OurLeadersState } from './our-leaders.model';

@Injectable()
export class OurLeadersService {

    private _apiUrlLokSabha: string = 'https://data.gov.in/node/85987/datastore/export/json';
    private _apiUrlRajyaSabha: string = 'https://data.gov.in/node/982241/datastore/export/json';

    constructor(private _http: Http) { }

    /**
    * Utility to shorten other calls
    * Call all function keys on passed in list
    */
    private _objectBasedMap(objectMap: any) {
        return function(dataList: any, fieldList: any, refId: number) {
            return dataList.map(function(data) {
                return Object.keys(objectMap)
                    .reduce(function(memo, key) {
                        memo[key] = objectMap[key].apply(objectMap, [data, fieldList, refId]);
                        return memo;
                }, {});
            });
        };
    }

    private _simpleData = this._objectBasedMap(OurLeadersModel);
    private _transformedData = (data: any, fields: any, refId: number) => {
        return this._simpleData(data, fields, refId);
    }

    private _extractData = (res: Response) => {
        let rsData = res.json();
        return rsData || {};
    }

    private _handleError = (error: any) => {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    getAttendance(sabhaStateId: number): Observable<any> {
        let apiUrl = (sabhaStateId === OurLeadersState.RAJYASABHA) ? this._apiUrlRajyaSabha : this._apiUrlLokSabha;

        return this._http.get(apiUrl)
            .map(this._extractData)
            .map((response: IOurLeaders) => {
                let result = this._transformedData(response.data, response.fields, sabhaStateId);
                // console.log('result---->> \n', result);
                return result;
            })
            .catch(this._handleError);
    }

}
