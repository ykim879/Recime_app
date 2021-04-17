import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';
import data from '../get_recipe.json';
declare var $: any;

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.page.html',
  styleUrls: ['./recipe-search.page.scss'],
})
export class RecipeSearchPage implements OnInit {

  currRecipe: any;
  recipeList: any;
  ind: any;
  likedRecipes: boolean[] = [];
  recipesLoaded: Promise<boolean>;

  constructor(
    private user: UserData, public storage: Storage
  ) { }

  ngOnInit() {
    this.recipeList = [];
  }

  async ionViewWillEnter() {
    //collect user data for post
    let skills = await this.storage.get("skill");
    let ingrTemp = await this.storage.get("ingredients");
    let ingredients = [];
    // for (let i = 0; i < ingrTemp.length; i++) {
    for (let i of ingrTemp) {
      ingredients.push(i.name);
    }
    let diets = await this.storage.get("diets");
    let tools = await this.storage.get("tools");
    let filteredMinTime = await this.storage.get("filteredMinTime");
    let filteredMaxTime = await this.storage.get("filteredMaxTime");
    let filteredIngredients = await this.storage.get("filteredIngredients");
    let filteredCourse = await this.storage.get("filteredCourse");
    let filteredCuisine = await this.storage.get("filteredCuisine");

    let post = await Promise.resolve($.post("http://localhost:8000/api/recommend",
      JSON.stringify({
        skills: skills,
        ingredients: ingredients,
        diets: diets,
        tools: tools,
        minTime: filteredMinTime,
        maxTime: filteredMaxTime,
        filteredIngredients: filteredIngredients,
        course: filteredCourse,
        cuisine: filteredCuisine
    })));

    let recipeData = await Promise.resolve($.get("http://localhost:8000/api/recommend/" + post));
    this.recipeList = recipeData.recipes;

    //get liked recipes
    let test = await this.storage.get("likedRecipes");
    // console.log("test", test);
    for (let i = 0; i < this.recipeList.length; i++) {
    // for (let i of test) {
      if (test != null && test.indexOf(this.recipeList[i].id) > -1) {
        this.likedRecipes[i] = true;
      } else {
        this.likedRecipes[i] = false;
      }
    }
  }

  ionViewWillLeave() {
    this.storage.set("currRecipe", this.recipeList[this.ind]);
  }

  updateCurrRecipe(index) {
    this.user.updateCurrRecipe(this.recipeList[index]);
    this.ind = index;
  }
}
