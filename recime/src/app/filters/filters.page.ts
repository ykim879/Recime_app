import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  time: Object;
  timeMin: any;
  timeMax: any;
//https://forum.ionicframework.com/t/getting-current-value-of-a-ion-range/70938/2
  constructor() { 
    this.time = {
      upper: 0,
      lower: 30
    };// later get it from user data
  }

  ngOnInit() {
  }
  setBadge(time) {
    this.timeMin = time.lower;
    this.timeMax = time.upper;
}
}
