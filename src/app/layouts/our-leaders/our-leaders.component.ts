import { Component, OnInit } from '@angular/core';
import { OurLeadersService } from '../../shared/services/our-leaders/our-leaders.service';
import { OurLeadersState } from '../../shared/services/our-leaders/our-leaders.model';
import { DataListComponent } from '../../components/data-list/data-list.component';

const LOKSABHA_STATE_ID = OurLeadersState.LOKSABHA;
const RAJYASABHA_STATE_ID = OurLeadersState.RAJYASABHA;

@Component({
  selector: 'our-leaders',
  providers: [OurLeadersService],
  directives: [DataListComponent],
  templateUrl: 'our-leaders.component.html',
  styleUrls: ['our-leaders.component.css']
})
export class OurLeadersComponent implements OnInit {
  ourLeadersData: Array<any> = [];
  errorMessage: string = null;

  constructor(private _ourLeadersService: OurLeadersService) {
  }

  ngOnInit() {
    this.getLokSabhaAttendence();
    this.getRajyaSabhaAttendence();
  }

  getLokSabhaAttendence() {
    this._ourLeadersService.getAttendance(LOKSABHA_STATE_ID)
      .subscribe(
        lokSabhaAttendance => {
          this.ourLeadersData.push(lokSabhaAttendance);
        },
        error => this.errorMessage = <any>error
      );
  }

  getRajyaSabhaAttendence() {
    this._ourLeadersService.getAttendance(RAJYASABHA_STATE_ID)
      .subscribe(
        rajyaSabhaAttendance => {
          this.ourLeadersData.push(rajyaSabhaAttendance);
        },
        error => this.errorMessage = <any>error
      );
  }

}
