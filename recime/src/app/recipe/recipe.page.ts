import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipe: any;

  constructor(
    private user: UserData, public storage: Storage
  ) { }

  ngOnInit() {
    this.recipe = this.user.currRecipe;
  }

}
