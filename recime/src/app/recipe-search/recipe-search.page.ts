import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.page.html',
  styleUrls: ['./recipe-search.page.scss'],
})
export class RecipeSearchPage implements OnInit {

  //dummy data to be filled in with the selected recipes from the API and algorithm
  dummyRecipes = [
    {
      image: "https://cdn.whatsgabycooking.com/wp-content/uploads/2014/02/WGC-Avocado-Toast-copy.jpg",
      name: "Avocado Toast",
      ingHave: 4,
      ingTotal: 4,
      min: 45,
      liked: true  
    },
    {
      image: "https://cdn.whatsgabycooking.com/wp-content/uploads/2014/02/WGC-Avocado-Toast-copy.jpg",
      name: "roast duck",
      ingHave: 2,
      ingTotal: 6,
      min: 30,
      liked: false  
    },
    {
      image: "https://cdn.whatsgabycooking.com/wp-content/uploads/2014/02/WGC-Avocado-Toast-copy.jpg",
      name: "pad thai",
      ingHave: 6,
      ingTotal: 7,
      min: 20,
      liked: true  
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleLike(index) {
    this.dummyRecipes[index].liked = !this.dummyRecipes[index].liked;
  }

}
