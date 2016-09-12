export interface IStateCrimes {
  fields: Array<any>;
  data: Array<any>;
}

export enum CrimesState {
  STATE = 1,
  UT,
  STATE_TOTAL,
  UT_TOTAL
}

let STATES_LIST = [
  'ANDHRA PRADESH',
  'ARUNACHAL PRADESH',
  'ASSAM',
  'BIHAR',
  'CHHATTISGARH',
  'GOA',
  'GUJARAT',
  'Haryana',
  'Himachal Pradesh',
  'Jammu & Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal'
];

let UNION_TERRITORIES_LIST = [
  'ANDAMAN AND NICOBAR ISLANDS',
  'CHANDIGARH',
  'DADAR AND NAGAR HAVELI',
  'DAMAN AND DIU',
  'DELHI',
  'LAKSHADWEEP',
  'PUDUCHERRY'
];

export let MISC_KEYWORDS = {
  'FOR_STATE'  : ['TOTAL (STATES)'],
  'FOR_UT'     : ['TOTAL (UTs)'],
  'FOR_CRIMES' : ['TOTAL CRIMES AGAINST WOMEN']
};

export let StateCrimesModel = {
  id: function(data, fields, index) {
    return index;
  },
  stateInfo: function(data, fields) {
    let stateType = null;
    let stateName = data[0];

    STATES_LIST.map(function(state) {
      if (state.toLowerCase() === stateName.toLowerCase()) {
        stateType = CrimesState[1];
      }
    });
    UNION_TERRITORIES_LIST.map(function(ut) {
      if (ut.toLowerCase() === stateName.toLowerCase()) {
        stateType = CrimesState[2];
      }
    });
    MISC_KEYWORDS.FOR_STATE.map(function(miscState) {
      if (miscState.toLowerCase() === stateName.toLowerCase()) {
        stateType = CrimesState[3];
      }
    });
    MISC_KEYWORDS.FOR_UT.map(function(miscUt) {
      if (miscUt.toLowerCase() === stateName.toLowerCase()) {
        stateType = CrimesState[4];
      }
    });

    return {
      type: stateType,
      name: stateName
    };
  },
  crimeInfo: function(data, fields) {
    return {
      type: fields[1].label,
      label: data[1],
      byMaleBelow18Y: {
        label: fields[2].label,
        value: data[2]
      },
      byMaleBetween18To30Y: {
        label: fields[4].label,
        value: data[4]
      },
      byMaleBetween30To45Y: {
        label: fields[6].label,
        value: data[6]
      },
      byMaleBetween45To60Y: {
        label: fields[8].label,
        value: data[8]
      },
      byMaleAbove60Y: {
        label: fields[10].label,
        value: data[10]
      }
    };
  }
};
