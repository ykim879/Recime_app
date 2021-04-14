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
  ionViewDidEnter() {
    this.defaultHref = '../liked-recipes';
  }
  ngOnInit() {
    this.recipeList = data.recipes;
  }
  async ionViewWillEnter() {
    //get liked recipes
    let test = await this.storage.get("likedRecipes");
    this.likedRecipes = [];
    this.likedRecipeList = [];
    console.log("test", test);
    for (let i = 0; i < this.recipeList.length; i++) {
      if (test != null && test.indexOf(this.recipeList[i].id) > -1) {
        this.likedRecipes.push(i);
        console.log(this.recipeList[i].title);
        this.likedRecipeList.push(this.recipeList[i]);
      } 
    }
    this.display = this.likedRecipeList;
    this.displayID = this.likedRecipes;
  }
  ionViewWillLeave() {
    this.storage.set("currRecipe", this.recipeList[this.ind]);
  }

  updateCurrRecipe(i) {
    console.log("update:", this.display[i].title);
    console.log("id:", this.display[i].id);
    this.user.updateCurrRecipe(this.display[i]);
    let index = 0;
    for (let id = 0; id < this.recipeList.length; id++) {
      if (this.display[i].id == this.recipeList[id].id) {
        index = id;
        break;
      } 
    }
    console.log("id:", this.recipeList[index].id);
    this.ind = index;
  }
  refresh() {
    this.display = this.likedRecipeList.filter(item => item.title.toLowerCase().indexOf(this.searchTerm) > -1);
    /*
    requestAnimationFrame(() => {
      items.forEach(item => {
        console.log("item:" ,item);
        let shouldShow = item.title.toLowerCase().indexOf(this.searchTerm) > -1;
        if(!shouldShow) {

        }
        //item..display = shouldShow ? 'block' : 'none';
      });
    });
    */
   console.log(this.display);
  }

}
