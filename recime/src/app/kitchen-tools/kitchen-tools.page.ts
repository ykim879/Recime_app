import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRadioGroup } from '@ionic/angular';
@Component({
  selector: 'app-kitchen-tools',
  templateUrl: './kitchen-tools.page.html',
  styleUrls: ['./kitchen-tools.page.scss'],
})
export class KitchenToolsPage implements OnInit {
  @ViewChild('radioGroup') radioGroup: IonRadioGroup //for defualt choice
  defaultHref = '';
  selectedRadioItem: any;
  radioselect = [ //later put it in User and do initialization in IonViewDefault or constructor
    {
      id: '0',
      name: 'Microwave',
      value: 'Microwave',
      text: 'Microwave',
      disabled: false,
      checked: false,
    },
    {
      id: '1',
      name: 'Oven',
      value: 'Oven',
      text: 'Oven',
      disabled: false,
      checked: false,
    },{
      id: '2',
      name: 'Stove',
      value: 'Stove',
      text: 'Stove',
      disabled: false,
      checked: false,
    },{
      id: '3',
      name: 'AirFryer',
      value: 'AirFryer',
      text: 'Air fryer',
      disabled: false,
      checked: false,
    },{
      id: '4',
      name: 'DeepFryer',
      value: 'DeepFryer',
      text: 'Deep fryer',
      disabled: false,
      checked: false,
    },{
      id: '5',
      name: 'Toaster',
      value: 'Toaster',
      text: 'Toaster',
      disabled: false,
      checked: false,
    },{
      id: '6',
      name: 'SlowCooker',
      value: 'SlowCooker',
      text: 'Slow cooker',
      disabled: false,
      checked: false,
    }];
  constructor() { }
  ionViewDidEnter() {
    this.defaultHref = '../kitchen-tools/kitchen-tools.module';
  }
  
  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail);
    this.radioselect  = event.detail; //change here after the updating User
  }

  radioFocus() {
    console.log("radioFocus");
  }
  radioSelect(event) {
    console.log("radioSelect",event.detail);
    this.selectedRadioItem = event.detail;
  }
  radioBlur() {
    console.log("radioBlur");
  }
  ngOnInit() {
  }

}
