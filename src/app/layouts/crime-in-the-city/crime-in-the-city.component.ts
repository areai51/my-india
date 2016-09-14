import { Component, OnInit, ViewChild } from '@angular/core';
import { StateCrimesService } from '../../shared/services/state-crimes/state-crimes.service';
import { CrimesState, MISC_KEYWORDS } from '../../shared/services/state-crimes/state-crimes.model';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';

@Component({
  selector: 'crime-in-the-city',
  providers: [StateCrimesService],
  templateUrl: 'crime-in-the-city.component.html',
  styleUrls: ['crime-in-the-city.component.css']
})
export class CrimeInTheCityComponent implements OnInit {
  @ViewChild(BarChartComponent)
  private _barComponent: BarChartComponent;

  crimesData;
  errorMessage: string = null;
  chartOptions = {
    title: 'Crimes Against Women',
    dataLabels: [],
    dataSets: []
  };

  constructor(private _stateCrimesService: StateCrimesService) {
  }

  ngOnInit() {
    this.getCrimesList();
  }

  getCrimesList = () => {
    this._stateCrimesService.getCrimesData()
      .subscribe(
        cData => {
          this.crimesData = cData;
          this.setChartOptions();

          this._barComponent.waitingForChartData();
        },
        error => this.errorMessage = <any>error
      );
  }

  setChartOptions = () => {
    let filteredData = this.getFilteredDataByStateAndTotalCrime();

    this.setChartDataLabels(filteredData);
    this.setChartDataSets(filteredData);
  }

  getFilteredDataByStateAndTotalCrime = () => {
    return this.crimesData.filter(function (obj) {
      return obj.stateInfo.type === CrimesState[1] && obj.crimeInfo.label === MISC_KEYWORDS.FOR_CRIMES[0];
    });
  }

  setChartDataLabels = (filteredData) => {
      let STATES_ARRAY = Object.keys(filteredData).map(val => filteredData[val].stateInfo.name);
      this.chartOptions.dataLabels.push(STATES_ARRAY);
  }

  setChartDataSets = (filteredData) => {
    let CRIME_BY_MALE_BELOW_18Y = Object.keys(filteredData).map(val => filteredData[val].crimeInfo.byMaleBelow18Y.value);
    let ds1 = {
      label: filteredData[0].crimeInfo.byMaleBelow18Y.label,
      data: CRIME_BY_MALE_BELOW_18Y,
      backgroundColor: 'rgba(255,99,132,1)'
    };
    this.chartOptions.dataSets.push(ds1);

    let CRIME_BY_MALE_BETWEEN_18TO30Y = Object.keys(filteredData).map(val => filteredData[val].crimeInfo.byMaleBetween18To30Y.value);
    let ds2 = {
      label: filteredData[0].crimeInfo.byMaleBetween18To30Y.label,
      data: CRIME_BY_MALE_BETWEEN_18TO30Y,
      backgroundColor: 'rgba(234, 124, 58, 1)'
    };
    this.chartOptions.dataSets.push(ds2);

    let CRIME_BY_MALE_BETWEEN_30TO45Y = Object.keys(filteredData).map(val => filteredData[val].crimeInfo.byMaleBetween30To45Y.value);
    let ds3 = {
      label: filteredData[0].crimeInfo.byMaleBetween30To45Y.label,
      data: CRIME_BY_MALE_BETWEEN_30TO45Y,
      backgroundColor: 'rgba(111, 113, 114, 1)'
    };
    this.chartOptions.dataSets.push(ds3);

    let CRIME_BY_MALE_BETWEEN_45TO60Y = Object.keys(filteredData).map(val => filteredData[val].crimeInfo.byMaleBetween45To60Y.value);
    let ds4 = {
      label: filteredData[0].crimeInfo.byMaleBetween45To60Y.label,
      data: CRIME_BY_MALE_BETWEEN_45TO60Y,
      backgroundColor: 'rgba(252, 190, 42, 1)'
    };
    this.chartOptions.dataSets.push(ds4);

    let CRIME_BY_MALE_ABOVE_60Y = Object.keys(filteredData).map(val => filteredData[val].crimeInfo.byMaleAbove60Y.value);
    let ds5 = {
      label: filteredData[0].crimeInfo.byMaleAbove60Y.label,
      data: CRIME_BY_MALE_ABOVE_60Y,
      backgroundColor: 'rgba(68, 113, 192, 1)'
    };
    this.chartOptions.dataSets.push(ds5);
  }
}
