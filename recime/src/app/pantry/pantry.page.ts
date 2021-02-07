import { Component, ViewChild, OnInit } from '@angular/core';
import { IonList} from '@ionic/angular';
@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.page.html',
  styleUrls: ['./pantry.page.scss'],
})
export class PantryPage implements OnInit {
@ViewChild('userIngredientsList', { static: true })  userIngredientsList: IonList;
  ingredients: any = [];
  constructor() { }

  ngOnInit() {
    this.ingredients = ["potato"]
  }

}
