import { Component, ViewChild, OnInit } from '@angular/core';
import {IonList, ToastController} from '@ionic/angular';
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

  constructor(private user: UserData, public storage: Storage, public toastController:ToastController) { }

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

  async presentToast(ingredient: any) {
    const toast = await this.toastController.create({
      message: this.titleCase(ingredient.name) + ' has been removed.',
      duration: 2000,
      color: "dark"
    });
    toast.present();
  }

  remove(i) {
    this.presentToast(this.displayIngredients[i])
    this.user.removePantryIngredient(i);
    this.displayIngredients.splice(i, 1);
    this.storage.set("ingredients", this.displayIngredients);
  }

  titleCase(str) {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
}
