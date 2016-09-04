import { Component, OnInit } from '@angular/core';


import { OurLeadersService } from '../../shared/services/our-leaders.service';

@Component({
  selector: 'app-our-leaders',
  providers: [OurLeadersService],
  templateUrl: 'our-leaders.component.html',
  styleUrls: ['our-leaders.component.css']
})
export class OurLeadersComponent implements OnInit {
  errorMessage: string;
  rajyaSabhaAttendance: any;

 LOKSABHA:string='https://data.gov.in/node/85987/datastore/export/json'
 RAJYASABHA:string='https://data.gov.in/node/982241/datastore/export/json'



  constructor(private _ourLeadersService: OurLeadersService) { }

  ngOnInit() {
    this.getRajyaSabhaAttendence();
  }

  getRajyaSabhaAttendence() {
    this._ourLeadersService.getAttendance(this.RAJYASABHA)
      .subscribe(
      rajyaSabhaAttendance => {
        this.rajyaSabhaAttendance = rajyaSabhaAttendance;
      },
      error => this.errorMessage = <any>error
      );
  }

}
