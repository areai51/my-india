import { Component, OnInit, ElementRef, Input } from '@angular/core';
// @Todo: issue when trying to load using es6 import statement
let Chart = require('chart.js/src/chart.js');

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chartWrapper: any;
  barChart: any;

  @Input('title') chartTitle: string;
  @Input('titleDisplay') chartTitleDisplay: boolean;
  @Input('dataSets') chartDataSets: Array<any>;
  @Input('dataLabels') chartDataLabels: Array<any>;

  constructor(private _elm: ElementRef) {
  }

  private _initBarChartOptions = () => {
    Chart.defaults.global.elements.rectangle.borderWidth = 0;
    Chart.defaults.global.maintainAspectRatio = false;
  }

  ngOnInit() {
    let selector = this._elm.nativeElement;
    this.chartWrapper = selector.getElementsByClassName('bar-chart');
  }

  waitingForChartData() {
    this._initBarChartOptions();
    if (this.chartDataLabels.length > 0) {
      this.createBarChart();
    }
  }

  createBarChart = () => {
    let ctx = this.chartWrapper.barChart.getContext('2d');
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.chartDataLabels[0],
        datasets: this.chartDataSets
      },
      options: {
        title: {
          display: true,
          text: this.chartTitle
        },
        legend: {
          position: 'bottom',
          labels: {
            fontColor: 'rgb(0, 0, 0)',
            boxWidth: 20
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            categoryPercentage: 1,
            barPercentage: 0.5
          }]
        }
      }
    });
  }
}
