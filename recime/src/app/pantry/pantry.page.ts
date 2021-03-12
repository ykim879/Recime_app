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
  displayIngredients: any =[];
  public searchTerm: string;

  constructor(private user: UserData, public storage: Storage) { }

  ngOnInit() {}

  ionViewDidLeave() {
    this.displayIngredients = [];
  }

  ionViewWillEnter() {
    this.storage.get("ingredients").then((val) => {
      for (let i = 0; i < val.length; i++) {
        this.displayIngredients.push(val[i]);
      }
    });
    console.log("DI", this.displayIngredients)
  }

  remove(i) {
    this.user.removePantryIngredient(i);
    this.displayIngredients.splice(i, 1);
    this.storage.set("ingredients", this.displayIngredients);

  }
}
