import {Component, Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import {AlertController, ToastController} from '@ionic/angular';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage {
  time: Object;
  timeMin: any;
  timeMax: any;
  clicked: boolean;
  courses: Set<string> = new Set(); //initialize with filter's component's elements
  cuisines: Set<string> = new Set(); //initialize with filter's component's
  ingredients: Set<string> = new Set(); //initialize with filter's component's elements
  userIngredients: Set<string> = new Set();//initialize this from the storage
  defaultHref = "tabs/recipe-search"

  constructor(private storage: Storage,
              public alertController: AlertController,
              public toastController:ToastController) {
    this.storage.get("filteredMinTime").then((val) => this.timeMin = val)
    this.storage.get("filteredMaxTime").then((val) => this.timeMax = val)
    this.time = {
      upper: this.timeMin,
      lower: this.timeMax
    };
  }
  ionViewDidEnter() {
    this.clicked = true;
  }
  async ionViewWillEnter() {
    this.timeMin = await this.storage.get("filteredMinTime")
    this.timeMax = await this.storage.get("filteredMaxTime")
    this.time = {
      upper: this.timeMin,
      lower: this.timeMax
    };
    this.storage.get("ingredients").then((val) => {
      for (let i = 0; i < val.length; i++) {
          this.userIngredients.add(val[i].name);
      }
    });
    this.storage.get("filteredIngredients").then((val) => this.ingredients = val)
    this.storage.get("filteredCourse").then((val) => {
      for (let i = 0; i < val.length; i++) {
        this.courses.add(val[i].name);
      }
    });
    this.storage.get("filteredCuisine").then((val) => {
      for (let i = 0; i < val.length; i++) {
        this.cuisines.add(val[i].name);
      }
    });
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
  saveSkills() {
    //To Do! save changes
    this.storage.set("filteredMinTime", this.timeMin)
    this.storage.set("filteredMaxTime", this.timeMax)
    this.storage.set("filteredIngredients", this.ingredients)
    this.storage.set("filteredCourse", this.courses)
    this.storage.set("filteredCuisine", this.cuisines)
    this.clicked = true;
    this.presentToast()
  }
  canDeactivate() {
    return !this.clicked;
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Changes have been saved.',
      duration: 2000,
      color: "dark"
    });
    toast.present();
  }
}

@Injectable()
export class DeactivateGuard implements CanDeactivate<FiltersPage> {
  constructor(public alertController: AlertController) {}
  canDeactivate(component: FiltersPage,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.canDeactivate()) {
      return new Promise((resolve, reject) => {
        this.alertController.create({
          header: 'Your changes have not been saved',
          message: 'Do you wanna save your changes?',
          cssClass: 'buttonCss',
          buttons: [{
            cssClass: 'yes-button',
            text: 'Yes, save changes',
            handler: () => {
              //this.router.navigateByUrl('/tabs/profile/cooking-skills') //navigation: https://www.codegrepper.com/code-examples/javascript/navigation+to+next+component+in+button+click+angular
              component.saveSkills();
              resolve(true);
            }
          },
            {
              cssClass: 'no-button',
              text: 'No',
              handler: () => {
                resolve(true);
              }
            }]
        }).then(res => {
          res.present();
        });
      })
    }
    return true;
  }
}
