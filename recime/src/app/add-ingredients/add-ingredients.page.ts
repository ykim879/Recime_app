import {Component, OnDestroy, OnInit} from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserData } from '../user-data';

@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.page.html',
  styleUrls: ['./add-ingredients.page.scss'],
})
export class AddIngredientsPage implements OnInit, OnDestroy {

  selectedIngredients: Set<string>;

  // This is a place holder for what will be the actual list of ingredients coming from the backend
  ingredientsList = ['apple', 'banana', 'carrot', 'potato', 'cabbage']

  constructor(private storage: Storage, private user: UserData) { }

  ngOnInit() {
    this.selectedIngredients = this.user.pantryIngredients
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
}
