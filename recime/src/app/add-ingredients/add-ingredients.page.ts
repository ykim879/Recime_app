import {Component, OnInit} from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserData } from '../user-data';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.page.html',
  styleUrls: ['./add-ingredients.page.scss'],
})
export class AddIngredientsPage implements OnInit {

  defaultHref = 'tabs/pantry'
  selectedIngredients: Object[] = [];
  //ingredients$: Observable<any>;
  //http: HttpClient;

  url = 'https://api.spoonacular.com/food/ingredients/autocomplete';
  apiKey = 'e98938cf995944c58f06dea4ea7ad8bc';
  public searchTerm: string;
  il: any = [Object, Object, Object, Object, Object, Object, Object, Object]

  // This is a place holder for what will be the actual list of ingredients coming from the backend
  ingredientsList: any = [] //['apple', 'banana', 'carrot', 'potato', 'cabbage']

  constructor(private storage: Storage,
              private user: UserData,
              private http:HttpClient,
              public toastController:ToastController) { 
                console.log("constructor 1");
                // this.storage.get("ingredients").then((val) => {
                //   console.log("val", val);
                //   this.selectedIngredients = val;
                // });
                console.log("constructor 2");
              }

  ngOnInit() {
    console.log("ngOnInit");
    this.storage.get("ingredients").then((val) => { 
      // for (let i = 0; i < val.length; i++) {
      for (let i of val) {
        this.selectedIngredients.push(i);
      }
    });
  }

  ionViewWillLeave() {
    this.storage.set("ingredients", this.selectedIngredients);
  }

  async presentToast(ingredient: any) {
    const toast = await this.toastController.create({
      message: this.titleCase(ingredient.name) + ' has been added.',
      duration: 2000,
      color: "dark"
    });
    toast.present();
  }

  toggleIngredient(ingredient: any) {
    let name = ingredient.name;
    let exists = false;
    this.storage.get("ingredients").then((val) => {
      if (val != null) {
        for (let i = 0; i < val.length; i++) {
          if (name === val[i].name) {
            exists = true;
            break;
          }
        }

        if (!exists) {
          this.selectedIngredients.push(ingredient);
          this.user.addPantryIngredient(ingredient);
        }
      }
      
      
    });
    this.presentToast(ingredient)
  }

  searchIngredients(entry: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('apiKey', this.apiKey);
    params = params.append('query', entry);
    params = params.append('number', "8")
    params = params.append('metaInformation', 'false');
    let example =  this.http.get(this.url, {params: params})
    example.subscribe((val: any) => {for (let i = 0; i < val.length; i++) {
      this.il[i] = val[i];
    }});
    return example;
  }

  refresh() {
    let apiresults = this.searchIngredients(this.searchTerm)
    this.ingredientsList = this.il;
  }

  titleCase(str) {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
}
