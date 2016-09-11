import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'data-list',
  templateUrl: 'data-list.component.html',
  styleUrls: ['data-list.component.css']
})
export class DataListComponent implements OnInit {
  dataListWrapper: any;

  @Input() title;
  @Input() data;

  constructor(private _elm: ElementRef) {
  }

  ngOnInit() {
    this.data.sort(this.sortByPercentageDesc);
    let selector = this._elm.nativeElement;
    this.dataListWrapper = selector.getElementsByClassName('data-list__wrapper');
    this.createProgressBar(this.data, this.dataListWrapper[0]);
  }

  createProgressBar(data: Array<any>, wrapper: any) {
    if (data) {
      setTimeout(function () {
        let elements = wrapper.getElementsByClassName('progress-fill');
        for (let i = 0; i < elements.length - 1; i++) {
          let elm = elements[i];
          elm.setAttribute('style', `width: ${data[i].totalAttendence.percentage}`);
        }
      }, 10);
    }
  }

  sortByPercentageDesc(a, b) {
    if (a.totalAttendence.value < b.totalAttendence.value) {
      return 1;
    }
    if (a.totalAttendence.value > b.totalAttendence.value) {
      return -1;
    }
    return 0;
  }

  sortByPercentageAesc(a, b) {
    if (a.totalAttendence.value < b.totalAttendence.value) {
      return -1;
    }
    if (a.totalAttendence.value > b.totalAttendence.value) {
      return 1;
    }
    return 0;
  }

  sortByName(a, b) {
    let x = a.memberInfo.displayName.toLowerCase();
    let y = b.memberInfo.displayName.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  }

}
