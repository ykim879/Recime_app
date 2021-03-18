import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  time: Object;
  timeMin: any;
  timeMax: any;
  clicked: boolean;
  courses: Set<string> = new Set(); //initialize with filter's component's elements
  cuisines: Set<string> = new Set(); //initialize with filter's component's 
  ingredients: Set<string> = new Set(); //initialize with filter's component's elements
  userIngredients: Set<string> = new Set();//initialize this from the storage
//https://forum.ionicframework.com/t/getting-current-value-of-a-ion-range/70938/2
  constructor(public alertController: AlertController) { 
    this.time = {
      upper: 0,
      lower: 30
    };// later get it from user data
  }
  ionViewDidEnter() {
    this.clicked = true;
  }
  ngOnInit() {
    //initialize user ingredients from the storage
  }
  setBadge(time) {
    this.timeMin = time.lower;
    this.timeMax = time.upper; // it can be deleted --> can access via time
    this.clicked = false;
}
selectCourse(course) {
  this.courses.add(course);
  this.clicked = false;
}
deleteCourse(course) {
  this.courses.delete(course);
  this.clicked = false;
}
selectCuisine(cuisine) {
  this.cuisines.add(cuisine);
  this.clicked = false;
}
deleteCuisine(course) {
  this.cuisines.delete(course);
  this.clicked = false;
}
selectIngredients(ingredient) {
  this.ingredients.add(ingredient);
  this.clicked = false;
}
deleteIngredients(ingredient) {
  this.ingredients.delete(ingredient);
  this.clicked = false;
}
ionViewWillLeave() {
  if (!this.clicked) {
    //this.location.back();
    this.showAlert();
  }
}
showAlert() {
  if(!this.clicked) {
    this.alertController.create({
      header: 'Your changes have not been saved',
      message: 'Do you wanna save your changes?',
      cssClass: 'buttonCss',
      buttons: [{
        cssClass: 'yes-button',
        text: 'Yes, save changes',
        handler: () => {
          //this.router.navigateByUrl('/tabs/profile/cooking-skills') //navigation: https://www.codegrepper.com/code-examples/javascript/navigation+to+next+component+in+button+click+angular
          this.saveChanges();
        } 
      },
      { 
        cssClass: 'no-button',
        text: 'No',
        handler: () => {
        }
      }]
    }).then(res => {
      res.present();

    });
  }
}
saveChanges() {
//To Do! save changes
}
}
