import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';
import {ActivatedRoute} from "@angular/router";
import { LikedRecipesPage } from '../liked-recipes/liked-recipes.page';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  defaultHref = '';
  recipe: any;
  segment = 'ingredients';
  isLiked = false;

  constructor(
    private user: UserData, public storage: Storage, private route: ActivatedRoute
  ) {
  }

  ionViewDidEnter() {
    this.defaultHref = '../recipe-search';
    this.storage.get("currRecipe").then((val) => {
      this.recipe = val;
    });
  }

  ionViewWillEnter() {
    this.storage.get("likedRecipes").then((val) => {
      let found = false;
      if (val != null) {
        let i = 0;
        while (i < val.length && !found) {
          if (this.recipe.id === val[i].id) {
            this.isLiked = true;
            found = true;
          }
          i++;
        }
      }
      
    });
  }

  async ionViewWillLeave() {
    let likedRecipes = await this.storage.get("likedRecipes");
    let found = false;
    if (likedRecipes != null) {
      let i = 0;
      while (i < likedRecipes.length && !found) {
        if (this.recipe.id === likedRecipes[i].id) {
          if (this.isLiked) {
            likedRecipes.push(this.recipe);
          } else {
            likedRecipes.splice(i, 1);
          }
          found = true;
        }
        i++;
      }
      if (!found && this.isLiked) {
        likedRecipes.push(this.recipe);
      }
    }
    console.log("likedRecipes", likedRecipes);
    this.storage.set("likedRecipes", likedRecipes);
  }

  ngOnInit() {
    this.recipe = this.user.currRecipe;
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

}
