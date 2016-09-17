export interface IOurLeaders {
  fields: Array<any>;
  data: Array<any>;
}

let if_no_of_days_contains = ['M', 'LOP', 'HDC'];
export let OurLeadersModel = {
  id: function (data, fields, refId) {
    return parseInt(data[0], 10);
  },
  seatInfo: function (data, fields, refId) {
    return {
      label: fields[1].label,
      seatNo: data[1]
    };
  },
  memberInfo: function (data, fields, refId) {
    let state = (refId === OurLeadersState.RAJYASABHA) ? data[6] : data[5];
    let constituency = (refId === OurLeadersState.RAJYASABHA) ? null : data[6];

    return {
      label: fields[2].label,
      displayName: data[2],
      memberName: data[2],
      memberState: state,
      memberConstituency: constituency
    };
  },
  sessionInfo: function (data, fields, refId) {
    let session = (refId === OurLeadersState.RAJYASABHA) ? data[3] : data[4];
    let fromDate = (refId === OurLeadersState.RAJYASABHA) ? data[4] : null;
    let toDate = (refId === OurLeadersState.RAJYASABHA) ? data[5] : null;

    return {
      session: session,
      fromDate: fromDate,
      toDate: toDate
    };
  },
  sittingInfo: function (data, fields, refId) {
    let totalSittings = data[7];
    let noOfDays = data[8];

    let isDaysCorrect = true;
    if_no_of_days_contains.map(function (day) {
      if (day === noOfDays) {
        isDaysCorrect = false;
      }
    });
    noOfDays = isDaysCorrect ? noOfDays : 'NA';

    return {
      totalSittings: totalSittings,
      noOfDaysMemberSignedRegister: noOfDays
    };
  },
  totalAttendence: function (data, fields, refId) {
    let total_sittings = this.sittingInfo(data).totalSittings;
    let signed_register = this.sittingInfo(data).noOfDaysMemberSignedRegister;
    let attendence = (signed_register === 'NA') ? 0 : (signed_register / total_sittings) * 100;
    let fixedNumber = attendence.toFixed();

    return {
      percentage: fixedNumber.toString() + '%',
      value: attendence,
      unit: '%'
    };
  },
  dataInfo: function (data, fields, refId) {
    let displayName = (refId === OurLeadersState.RAJYASABHA) ? 'Rajya Sabha' : 'Lok Sabha';
    let label = (refId === OurLeadersState.RAJYASABHA) ? 'rajya_sabha' : 'lok_sabha';
    let stateName = (refId === OurLeadersState.RAJYASABHA) ? OurLeadersState[0] : OurLeadersState[1];
    let stateId = refId;

    return {
      displayName: displayName,
      label: label,
      stateName: stateName,
      stateId: stateId
    };
  }
};

export enum OurLeadersState {
  RAJYASABHA,
  LOKSABHA
}
