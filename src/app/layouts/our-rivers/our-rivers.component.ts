import { Component, OnInit } from '@angular/core';
import { OurRiversService } from '../../shared/services/our-rivers/our-rivers.service';

@Component({
  selector: 'app-our-rivers',
  providers: [OurRiversService],
  templateUrl: 'our-rivers.component.html',
  styleUrls: ['our-rivers.component.css']
})
export class OurRiversComponent implements OnInit {
  errorMessage: string;
  riversData: any;

  constructor(private _ourRiversService: OurRiversService) {
  }

  ngOnInit() {
    this.getRiversData();
  }

  getRiversData() {
    this._ourRiversService.getRiversData()
      .subscribe(
        riversData => {
          this.riversData = riversData;
        },
        error => this.errorMessage = <any>error);
  }
}
