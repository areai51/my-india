import { Component, OnInit, ElementRef } from '@angular/core';
import { OurLeadersService } from '../../shared/services/our-leaders/our-leaders.service';

@Component({
  selector: 'our-leaders',
  providers: [OurLeadersService],
  templateUrl: 'our-leaders.component.html',
  styleUrls: ['our-leaders.component.css']
})
export class OurLeadersComponent implements OnInit {
  errorMessage: string;
  rajyaSabhaAttendance: any;
  lokSabhaAttendance: any;
  wrappers: any;
  LOKSABHA: string = 'https://data.gov.in/node/85987/datastore/export/json';
  RAJYASABHA: string = 'https://data.gov.in/node/982241/datastore/export/json';

  constructor(private _ourLeadersService: OurLeadersService, private elm: ElementRef) {
  }

  ngOnInit() {
    this.getLokSabhaAttendence();
    this.getRajyaSabhaAttendence();
    let selector = this.elm.nativeElement;
    this.wrappers = selector.getElementsByClassName('data-wrapper');
  }

  getLokSabhaAttendence() {
    this._ourLeadersService.getAttendance(this.LOKSABHA)
      .subscribe(
        lokSabhaAttendance => {
          this.lokSabhaAttendance = lokSabhaAttendance;
          this.createProgressBar(this.lokSabhaAttendance, this.wrappers[0]);
        },
        error => this.errorMessage = <any>error
      );
  }

  getRajyaSabhaAttendence() {
    this._ourLeadersService.getAttendance(this.RAJYASABHA)
      .subscribe(
        rajyaSabhaAttendance => {
          this.rajyaSabhaAttendance = rajyaSabhaAttendance;
          this.createProgressBar(this.rajyaSabhaAttendance, this.wrappers[1]);
        },
        error => this.errorMessage = <any>error
      );
  }

  createProgressBar(data: any, wrapper: any) {
    if (data) {
      setTimeout(function () {
        const elements = wrapper.getElementsByClassName('progress-fill');
        for (let i = 0; i < elements.length - 1; i++) {
          let elm = elements[i];
          let total_sittings = data[i][7];
          let no_of_attendence = data[i][8];
          if (no_of_attendence !== 'M' && no_of_attendence !== 'LOP' && no_of_attendence !== 'HDC') {
            let percent = (no_of_attendence / total_sittings * 100);
            elm.setAttribute('style', `width: ${percent}%`);
          }
        }
      }, 10);
    }
  }

}
