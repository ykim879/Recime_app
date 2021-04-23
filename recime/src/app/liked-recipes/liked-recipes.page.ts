import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';
import {ActivatedRoute} from "@angular/router";
import data from '../get_recipe.json';
import { DietaryRestrictionsPageModule } from '../dietary-restrictions/dietary-restrictions.module';

@Component({
  selector: 'app-liked-recipes',
  templateUrl: './liked-recipes.page.html',
  styleUrls: ['./liked-recipes.page.scss'],
})
export class LikedRecipesPage implements OnInit {
  defaultHref = '';
  recipeList: any;
  ind: any;
  likedRecipes: any[] = [];
  likedRecipeList: any[] = [];
  displayID: any[] = [];
  display: any[] = [];
  public searchTerm: string;
  constructor(
    private user: UserData, public storage: Storage, private route: ActivatedRoute
  ) {
  }
  async ionViewDidEnter() {
    this.defaultHref = '../liked-recipes';
    let test = await Promise.resolve(this.storage.get("likedRecipes"));
    this.display = test;
  }
  ngOnInit() {
    this.recipeList = [];
  }
  async ionViewWillEnter() {
    //get liked recipes
    // let test = await this.storage.get("likedRecipes");
    let test = await Promise.resolve(this.storage.get("likedRecipes"));
    this.display = test;
  }
  ionViewWillLeave() {
    this.storage.set("currRecipe", this.display[this.ind]);
    this.storage.set("likedRecipes", this.display);
  }

  updateCurrRecipe(index) {
    this.user.updateCurrRecipe(this.display[index]);
    this.ind = index;
  }

  refresh() {
    this.display = this.display.filter(item => item.title.toLowerCase().indexOf(this.searchTerm) > -1);
  }

}
