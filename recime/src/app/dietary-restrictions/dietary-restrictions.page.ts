import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dietary-restrictions',
  templateUrl: './dietary-restrictions.page.html',
  styleUrls: ['./dietary-restrictions.page.scss'],
})
export class DietaryRestrictionsPage implements OnInit {
  defaultHref = '';
  constructor() { }
  ionViewDidEnter() {
    this.defaultHref = '../dietary-restrictions/dietary-restrictions.module';
  }

  ngOnInit() {
  }

}
