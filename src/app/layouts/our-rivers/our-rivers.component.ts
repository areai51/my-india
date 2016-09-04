import { Component, OnInit } from '@angular/core';
import { OurRivers } from '../../shared/services/our-rivers';
import { OurRiversService } from '../../shared/services/our-rivers.service';


@Component({
  selector: 'app-our-rivers',
  providers: [OurRiversService],
  templateUrl: 'our-rivers.component.html',
  styleUrls: ['our-rivers.component.css']
})
export class OurRiversComponent implements OnInit {
  errorMessage: string;
  riversData : any;
  constructor(private _ourRiversService: OurRiversService) { }

  ngOnInit() {
    this.getRiversData()
    
  }


  getRiversData() {
    this._ourRiversService.getRiversData()
      .subscribe(
      riversData => { this.riversData = riversData; 
        console.log(this.riversData)},
      error => this.errorMessage = <any>error
      )
  }



}
