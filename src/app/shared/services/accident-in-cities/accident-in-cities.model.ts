export interface IAccidentInCities {
  fields: Array<any>;
  data: Array<any>;
}

export let AccidentInCitiesModel = {
  id: function (data, fields, index) {
    return index;
  },
  dataInfo: function(data, fields, index) {
    let info = {};

    if (fields) {
      for (let i = 0; i < fields.length; i++) {
        info['label_' + i] = fields[i].label;
        info['data_' + i] = data[i];
      }
    }

    return info;
  },
  cityName: function(data, fields, index) {
    let city = this.dataInfo(data, fields, index);
    return city.data_0;
  }
};

export class AccidentInCitiesClass {

  constructor(private _accidentInCitiesData: Array<any>) {
  }

  getTotalCities() {
    return Object.keys(this._accidentInCitiesData).map(val => {
      return this._accidentInCitiesData[val].cityName;
    });
  }

  getLabelsForFatalAccidentsByYear() {
    let year = {};

    year['y2011'] = this._accidentInCitiesData[0].dataInfo.label_1;
    year['y2012'] = this._accidentInCitiesData[0].dataInfo.label_5;
    year['y2013'] = this._accidentInCitiesData[0].dataInfo.label_9;
    year['y2014'] = this._accidentInCitiesData[0].dataInfo.label_14;

    return year;
  }

  getLabelsForTotalAccidentsByYear() {
    let year = {};

    year['y2011'] = this._accidentInCitiesData[0].dataInfo.label_2;
    year['y2012'] = this._accidentInCitiesData[0].dataInfo.label_6;
    year['y2013'] = this._accidentInCitiesData[0].dataInfo.label_10;
    year['y2014'] = this._accidentInCitiesData[0].dataInfo.label_18;

    return year;
  }

  getTotalFatalAccidents2011() {
    return Object.keys(this._accidentInCitiesData).map(val => {
      return this._accidentInCitiesData[val].dataInfo.data_1;
    });
  }

  getTotalAccidents2011() {
    return Object.keys(this._accidentInCitiesData).map(val => {
      return this._accidentInCitiesData[val].dataInfo.data_2;
    });
  }

  getTotalFatalAccidents2012() {
    return Object.keys(this._accidentInCitiesData).map(val => {
      return this._accidentInCitiesData[val].dataInfo.data_5;
    });
  }

  getTotalAccidents2012() {
    return Object.keys(this._accidentInCitiesData).map(val => {
      return this._accidentInCitiesData[val].dataInfo.data_6;
    });
  }

  getTotalFatalAccidents2013() {
    return Object.keys(this._accidentInCitiesData).map(val => {
      return this._accidentInCitiesData[val].dataInfo.data_9;
    });
  }

  getTotalAccidents2013() {
    return Object.keys(this._accidentInCitiesData).map(val => {
      return this._accidentInCitiesData[val].dataInfo.data_10;
    });
  }

  getTotalFatalAccidents2014() {
    return Object.keys(this._accidentInCitiesData).map(val => {
      return this._accidentInCitiesData[val].dataInfo.data_14;
    });
  }

  getTotalAccidents2014() {
    return Object.keys(this._accidentInCitiesData).map(val => {
      return this._accidentInCitiesData[val].dataInfo.data_18;
    });
  }
}
