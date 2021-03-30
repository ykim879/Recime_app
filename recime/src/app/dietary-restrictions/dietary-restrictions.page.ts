import { Component, OnInit, ViewChild } from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';
import {AlertController, ToastController} from '@ionic/angular';
@Component({
  selector: 'app-dietary-restrictions',
  templateUrl: './dietary-restrictions.page.html',
  styleUrls: ['./dietary-restrictions.page.scss'],
})

export class DietaryRestrictionsPage implements OnInit {

  defaultHref = '';
  selectedDiets: string[] = [];
  clicked: boolean;
  //taken from Spoonacular API's 'Diets' and 'Intolerances' endpoints
  dietList = [
    {
      id: '0',
      name: 'dietList',
      value: 'eggIntolerance',
      text: 'Egg Intolerance',
      disabled: false,
      isChecked: false
    },
    {
      id: '1',
      name: 'dietList',
      value: 'glutenFree',
      text: 'Gluten Free',
      disabled: false,
      isChecked: false
    },
    {
      id: '2',
      name: 'dietList',
      value: 'lactoseIntolerance',
      text: 'Lactose Intolerance',
      disabled: false,
      isChecked: false
    },
    {
      id: '3',
      name: 'dietList',
      value: 'paleo',
      text: 'Paleo',
      disabled: false,
      isChecked: false
    },
    {
      id: '4',
      name: 'dietList',
      value: 'peanutAllergy',
      text: 'Peanut Allergy',
      disabled: false,
      isChecked: false
    },
    {
      id: '5',
      name: 'dietList',
      value: 'pescetarian',
      text: 'Pescetarian',
      disabled: false,
      isChecked: false
    },
    {
      id: '6',
      name: 'dietList',
      value: 'seafoodAllergy',
      text: 'Seafood Allergy',
      disabled: false,
      isChecked: false
    },
    {
      id: '7',
      name: 'dietList',
      value: 'shellfishAllergy',
      text: 'Shellfish Allergy',
      disabled: false,
      isChecked: false
    },
    {
      id: '8',
      name: 'dietList',
      value: 'treeNutAllergy',
      text: 'Tree Nut Allergy',
      disabled: false,
      isChecked: false
    },
    {
      id: '9',
      name: 'dietList',
      value: 'vegan',
      text: 'Vegan',
      disabled: false,
      isChecked: false
    },
    {
      id: '10',
      name: 'dietList',
      value: 'vegetarian',
      text: 'Vegetarian',
      disabled: false,
      isChecked: false
    }
   ];

  constructor(private user: UserData,
              public alertController: AlertController,
              public storage: Storage,
              public toastController:ToastController
  ) { }

  ionViewDidEnter() {
    this.defaultHref = '../dietary-restrictions';
    this.clicked = true;
  }

  ngOnInit() {
    //user's dietary restrictions are checked upon arrival to page
    this.storage.get("diets").then((val) => {
      for (let i = 0; i < this.dietList.length; i++) {
        for (let item of val) {
          if (item === this.dietList[i].value) {
            this.dietList[i].isChecked = true;
          }
        }
      }
    });
  }

  itemChange(event) {
    if (!event.detail.checked) {
      this.user.removeDietaryRestriction(event.detail.value);
      const index = this.selectedDiets.indexOf(event.detail.value);
      if (index > -1) {
          this.selectedDiets.splice(index, 1);
      }
    } else {
      //no duplicates
      const index = this.user.dietaryRestrictions.indexOf(event.detail.value);
      if (index <= -1) {
        this.user.addDietaryRestriction(event.detail.value);
        this.selectedDiets.push(event.detail.value);
      }

    }
    this.clicked = false;
  }
  ionViewWillLeave() {
    console.log("leaving");
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
            this.saveDiets();
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

  saveDiets() {
    this.storage.set("diets", this.user.dietaryRestrictions);
    this.clicked = true;
    this.presentToast()
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
