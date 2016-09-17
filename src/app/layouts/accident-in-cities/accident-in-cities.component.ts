import { Component, OnInit, ViewChild } from '@angular/core';
import { AccidentInCitiesService } from '../../shared/services/accident-in-cities/accident-in-cities.service';
import { AccidentInCitiesClass } from '../../shared/services/accident-in-cities/accident-in-cities.model';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';

@Component({
  selector: 'accident-in-cities',
  providers: [AccidentInCitiesService],
  templateUrl: './accident-in-cities.component.html',
  styleUrls: ['./accident-in-cities.component.css']
})
export class AccidentInCitiesComponent implements OnInit {
  @ViewChild(BarChartComponent)
  private _barComponent: BarChartComponent;

  accidentsData;
  accidentsClass;
  errorMessage: string = null;
  chartOptions = {
    title: 'Fatal Accidents',
    dataLabels: [],
    dataSets: []
  };

  constructor(private _accidentInCitiesService: AccidentInCitiesService) {
  }

  ngOnInit() {
    this.getAccidentsList();
  }

  getAccidentsList = () => {
    this._accidentInCitiesService.getAccidentData()
      .subscribe(
        accidentData => {
          this.accidentsData = accidentData;
          this.accidentsClass = new AccidentInCitiesClass(this.accidentsData);
          this.setChartOptions();

          this._barComponent.waitingForChartData();
        },
        error => this.errorMessage = <any>error
      );
  }

  setChartOptions = () => {
    let CITIES_ARRAY = this.accidentsClass.getTotalCities();
    this.chartOptions.dataLabels.push(CITIES_ARRAY);

    this.setChartDataSets();
  }

  setChartDataSets = () => {
    let ds1 = {
      label: this.accidentsClass.getLabelsForFatalAccidentsByYear().y2011,
      data: this.accidentsClass.getTotalFatalAccidents2011(),
      backgroundColor: 'rgba(234, 124, 58, 1)'
    };
    this.chartOptions.dataSets.push(ds1);

    let ds2 = {
      label: this.accidentsClass.getLabelsForFatalAccidentsByYear().y2012,
      data: this.accidentsClass.getTotalFatalAccidents2012(),
      backgroundColor: 'rgba(252, 190, 42, 1)'
    };
    this.chartOptions.dataSets.push(ds2);

    let ds3 = {
      label: this.accidentsClass.getLabelsForFatalAccidentsByYear().y2013,
      data: this.accidentsClass.getTotalFatalAccidents2013(),
      backgroundColor: 'rgba(68, 113, 192, 1)'
    };
    this.chartOptions.dataSets.push(ds3);

    let ds4 = {
      label: this.accidentsClass.getLabelsForFatalAccidentsByYear().y2014,
      data: this.accidentsClass.getTotalFatalAccidents2014(),
      backgroundColor: 'rgba(112,170,75,1)'
    };
    this.chartOptions.dataSets.push(ds4);
  }

}
