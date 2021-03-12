import {Component, OnInit} from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserData } from '../user-data';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.page.html',
  styleUrls: ['./add-ingredients.page.scss'],
})
export class AddIngredientsPage implements OnInit {

  defaultHref = '';
  selectedIngredients: Object[] = [];
  //ingredients$: Observable<any>;
  //http: HttpClient;
  
  url = 'https://api.spoonacular.com/food/ingredients/autocomplete';
  apiKey = 'e98938cf995944c58f06dea4ea7ad8bc';
  public searchTerm: string;
  il: any = [Object, Object, Object, Object, Object, Object, Object, Object]

  // This is a place holder for what will be the actual list of ingredients coming from the backend
  ingredientsList: any = [] //['apple', 'banana', 'carrot', 'potato', 'cabbage']

  constructor(private storage: Storage, private user: UserData, private http:HttpClient) { }

  ngOnInit() {
    this.storage.get("ingredients").then((val) => {
      for (let i = 0; i < val.length; i++) {
        this.selectedIngredients.push(val[i]);
      }
    });
    //this.ingredientList = this.searchIngredients(this.searchTerm)
    /*this.searchIngredients("app").subscribe({
      next: any =>{
        this.ingredientsList= any 
      }
    })*/
  }
  
  ionViewDidEnter() {
    this.defaultHref = '../pantry';
  }

  ionViewWillLeave() {
    this.storage.set("ingredients", this.selectedIngredients);
  }
    
  toggleIngredient(ingredient: any) {
    let name = ingredient.name;
    let exists = false;
    this.storage.get("ingredients").then((val) => {
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
    });
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
}
