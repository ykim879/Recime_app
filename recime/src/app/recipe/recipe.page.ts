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
      if (val.indexOf(this.recipe.id) > -1) {
        this.isLiked = true;
      }
    });
  }

  ngOnInit() {
    this.recipe = this.user.currRecipe;
  }

  toggleLike() {
    this.storage.get("likedRecipes").then((val) => {
      if (val.indexOf(this.recipe.id) > -1) {
        this.user.removeLiked(this.recipe.id);
        this.isLiked = false;
      } else {
        this.user.addLiked(this.recipe.id);
        this.isLiked = true;
      }
    });
  }

}
