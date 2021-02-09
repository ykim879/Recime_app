import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRadioGroup } from '@ionic/angular';
export enum DeitaryRestriction { //maybe have to be in somewhere else
  TreeNuts = "Tree Nuts",
  Peanuts = "Peanuts",
  Milk = "Milk",
  Glueten = "Glueten",
  Vegan = "Vegan",
  Vegetarian = "Vegetarian",
  Halal = "Halal",
  Chocolate = "Chocolate",
  Lactose = "Lactose",
  Diabetic = "Diabetic"
}
@Component({
  selector: 'app-dietary-restrictions',
  templateUrl: './dietary-restrictions.page.html',
  styleUrls: ['./dietary-restrictions.page.scss'],
})
export class DietaryRestrictionsPage implements OnInit {
  @ViewChild('radioGroup') radioGroup: IonRadioGroup //for defualt choice
  defaultHref = '';
  selectedRadioItem:any;
  radioselect = [ //later put it in User and do initialization in IonViewDefault or constructor
    {
      id: '0',
      name: 'TreeNuts',
      value: 'TreeNuts',
      text: 'Tree Nuts',
      disabled: false,
      checked: false,
    },
    {
      id: '1',
      name: 'Peanuts',
      value: 'Peanuts',
      text: 'Peanuts',
      disabled: false,
      checked: false,
    },{
      id: '2',
      name: 'Milk',
      value: 'Milk',
      text: 'Milk',
      disabled: false,
      checked: false,
    },{
      id: '3',
      name: 'Glueten',
      value: 'Glueten',
      text: 'Glueten',
      disabled: false,
      checked: false,
    },{
      id: '4',
      name: 'Vegan',
      value: 'Vegan',
      text: 'Vegan',
      disabled: false,
      checked: false,
    },{
      id: '5',
      name: 'Vegetarian',
      value: 'Vegetarian',
      text: 'Vegetarian',
      disabled: false,
      checked: false,
    },{
      id: '6',
      name: 'Halal',
      value: 'Halal',
      text: 'Halal',
      disabled: false,
      checked: false,
    },{
      id: '7',
      name: 'Chocolate',
      value: 'Chocolate',
      text: 'Chocolate',
      disabled: false,
      checked: false,
    },{
      id: '8',
      name: 'Lactose',
      value: 'Lactose',
      text: 'Lactose',
      disabled: false,
      checked: false,
    },{
      id: '9',
      name: 'Diabetic',
      value: 'Diabetic',
      text: 'Diabetic',
      disabled: false,
      checked: false,
    }];
  constructor() { }
  ionViewDidEnter() {
    this.defaultHref = '../dietary-restrictions/dietary-restrictions.module';
  }
  
  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail);
    this.radioselect  = event.detail; //what is event.detail?
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
