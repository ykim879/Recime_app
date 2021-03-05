import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  time: Object;
  timeMin: any;
  timeMax: any;
  courses: Set<string> = new Set(); //initialize with filter's component's elements
  cuisines: Set<string> = new Set(); //initialize with filter's component's 
  ingredients: Set<string> = new Set(); //initialize with filter's component's elements
  userIngredients: Set<string> = new Set();//initialize this from the storage
//https://forum.ionicframework.com/t/getting-current-value-of-a-ion-range/70938/2
  constructor() { 
    this.time = {
      upper: 0,
      lower: 30
    };// later get it from user data
  }

  ngOnInit() {
    //initialize user ingredients from the storage
  }
  setBadge(time) {
    this.timeMin = time.lower;
    this.timeMax = time.upper; // it can be deleted --> can access via time
}
selectCourse(course) {
  this.courses.add(course);
}
deleteCourse(course) {
  this.courses.delete(course);
}
selectCuisine(cuisine) {
  this.cuisines.add(cuisine);
}
deleteCuisine(course) {
  this.cuisines.delete(course);
}
selectIngredients(ingredient) {
  this.ingredients.add(ingredient);
}
deleteIngredients(ingredient) {
  this.ingredients.delete(ingredient);
}
saveSkills() {
//To Do! save changes
}
}
