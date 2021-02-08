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
  radioselect = DeitaryRestriction
  constructor() { }
  ionViewDidEnter() {
    this.defaultHref = '../dietary-restrictions/dietary-restrictions.module';
  }

  ngOnInit() {
  }

}
