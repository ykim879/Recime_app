import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';
import {ActivatedRoute} from "@angular/router";

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
      const index = val.indexOf(this.recipe.id);

      if (index > -1) {
        this.isLiked = true;
      }
    });
  }

  async ionViewWillLeave() {
    let likedRecipes = await this.storage.get("likedRecipes");
    const index = likedRecipes.indexOf(this.recipe.id);
    if (this.isLiked) {
      if (index <= -1) {
        likedRecipes.push(this.recipe.id);
      }
    } else {
      if (index > -1) {
        likedRecipes.splice(index, 1);
      }
    }
    this.storage.set("likedRecipes", likedRecipes);
  }

  ngOnInit() {
    this.recipe = this.user.currRecipe;
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

}
