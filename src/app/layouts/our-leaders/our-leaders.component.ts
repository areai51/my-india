import { Component, OnInit } from '@angular/core';

import { RajyaSabha } from '../../shared/services/rajya-sabha/rajya-sabha';
import { RajyaSabhaService } from '../../shared/services/rajya-sabha/rajya-sabha.service';

@Component({
  selector: 'app-our-leaders',
  providers: [
    RajyaSabhaService
  ],
  templateUrl: 'our-leaders.component.html',
  styleUrls: ['our-leaders.component.css']
})
export class OurLeadersComponent implements OnInit {
  errorMessage: string;
  rajyaSabha: RajyaSabha[];

  constructor(private _rajyaSabhaService: RajyaSabhaService) { }

  ngOnInit() {
    this.getRajyaSabhaAttendence();
  }

  getRajyaSabhaAttendence() {
    this._rajyaSabhaService.getAttendance()
      .subscribe(
        rajyaSabha => {
          this.rajyaSabha = rajyaSabha;
        },
        error =>  this.errorMessage = <any>error
      );
  }

}
