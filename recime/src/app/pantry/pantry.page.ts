import { Component, ViewChild, OnInit } from '@angular/core';
import { IonList} from '@ionic/angular';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.page.html',
  styleUrls: ['./pantry.page.scss'],
})
export class PantryPage implements OnInit {
@ViewChild('userIngredientsList', { static: true })  userIngredientsList: IonList;
  ingredients: any = [];

  //check more angular stuffs 
  test = this.user.cookingSkills;

  constructor(
    private user: UserData, public storage: Storage
  ) { }

  ngOnInit() {
    this.ingredients = ["potato"]
  }

}
