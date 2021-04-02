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

  constructor(
    private user: UserData, public storage: Storage
  ) { }

  ngOnInit() {
    this.recipeList = data.recipes.recipes;

    /*
    var cookingSkills = this.storage.get("skill").then((val) => {console.log('skill', val)});
    var ingredients = this.storage.get("ingredients").then((val) => {console.log('ingr', val)});
    var diets = this.storage.get("diets").then((val) => {console.log('diets', val)});
    var tools = this.storage.get("tools").then((val) => {console.log('tools', val)});
    var filters = {
      minTime: this.storage.get("filteredMinTime").then((val) => {console.log('minTime', val)}),
      maxTime: this.storage.get("filteredMaxTime").then((val) => {console.log('maxTime', val)}),
      filteredIngredients: this.storage.get("filteredIngredients").then((val) => {console.log('filteredIngredients', val)}),
      course: this.storage.get("filteredCourse").then((val) => {console.log('course', val)}),
      cuisine: this.storage.get("filteredCuisine").then((val) => {console.log('cuisine', val)})
    };
    
    //npm install jquery to use i think
    $(document).ready(function() {
      // alert("i'm here ;v;")
      //testing the jquery
      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      //   .then(response => response.json())
      //   .then(json => console.log(json))
      $.post("http://localhost:8000/api/recommend",
        { params: {cookingSkills, ingredients, diets, tools, filters} });


    });
    */
  }

  ionViewWillEnter() {
    this.storage.get("likedRecipes").then((val) => {
      for (let i = 0; i < this.recipeList.length; i++) {
        if (val.indexOf(this.recipeList[i].id) > -1) {
          this.likedRecipes[i] = true;
        } else {
          this.likedRecipes[i] = false;
        }
      }
      
    });
  }

  ionViewWillLeave() {
    this.storage.set("currRecipe", this.recipeList[this.ind]);
  }

  toggleLike(index) {
    this.recipeList[index].liked = !this.recipeList[index].liked;
  }

  updateCurrRecipe(index) {
    this.user.updateCurrRecipe(this.recipeList[index]);
    this.ind = index;
  }
}
