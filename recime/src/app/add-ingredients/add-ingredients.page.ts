import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class AddIngredientsPage implements OnInit, OnDestroy {
//@ViewChild('userIngredientsList', { static: true })  userIngredientsList: IonList;
  selectedIngredients: Set<string>;
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
    this.selectedIngredients = this.user.pantryIngredients
    //this.ingredientList = this.searchIngredients(this.searchTerm)
    /*this.searchIngredients("app").subscribe({
      next: any =>{
        this.ingredientsList= any 
      }
    })*/
  }

  toggleIngredient(ingredient: string) {
    if (this.selectedIngredients.has(ingredient))
      this.selectedIngredients.delete(ingredient)
    else
      this.selectedIngredients.add(ingredient)
  }

  ngOnDestroy() {
    this.selectedIngredients.forEach(
      (ingredient) => this.user.addPantryIngredient(ingredient))
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
