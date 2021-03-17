import { Component, ComponentFactoryResolver, OnInit,ViewChild } from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-cooking-skills',
  templateUrl: './cooking-skills.page.html',
  styleUrls: ['./cooking-skills.page.scss'],
})
// priority of back button 
export class CookingSkillsPage implements OnInit {

  defaultHref = '';
  chosen_skill = this.user.cookingSkills;
  selectedRadioItem: any;
  selectedRadioGroup: any;
  clicked: boolean;
  
  
  skillList = [
    {
      name: 'skillList',
      value: 'beginner',
      text: 'Beginner',
      disabled: false
    },
    {
      name: 'skillList',
      value: 'intermediate',
      text: 'Intermediate',
      disabled: false
    },
    {
      name: 'skillList',
      value: 'expert',
      text: 'Expert',
      disabled: false
    }
  ];

  constructor(
    private user: UserData, public storage: Storage,
    public alertController: AlertController,
    private router: Router,
    public navCtrl: NavController, private location: Location
  ) { }
  ionViewDidEnter() {
    
    this.clicked = true;
  }

  ngOnInit() {
    //user's skill is checked upon arrival to page
    this.storage.get("skill").then((val) => {
      this.chosen_skill = val;
    });
    this.defaultHref = '../cooking-skills';
  }

  radioGroupChange(event) {
    this.selectedRadioGroup = event.detail;
    this.clicked = false;
  }

  radioSelect(event) {
    this.selectedRadioItem = event.detail;
    this.clicked = false;
  }

  saveSkills() {
    this.user.setSkillLevel(this.selectedRadioGroup.value);
    this.storage.set("skill", this.user.cookingSkills);
    this.clicked = true;
  }
  canDeactivate() : boolean {
    console.log("test!");
    if (!this.clicked) {
      return false;
    }
    return true;
  }
  //https://www.debugcn.com/en/article/74127847.html
  ionViewWillLeave() {
    console.log("leaving");
    if (!this.clicked) {
      //this.location.back();
      this.showAlert();
    }
  }
  confirmLeave(): Promise<Boolean> {
    let resolveLeaving;
    const canLeave = new Promise<Boolean>(resolve => resolveLeaving = resolve);
    const alert = this.alertController.create({
      header: 'Confirm leave',
      message: 'Do you want to leave the page?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => resolveLeaving(false)
        },
        {
          text: 'Yes',
          handler: () => resolveLeaving(true)
        }
      ]
    }).then(res => {

      res.present();

    });
    return canLeave
  }

/*
  ionViewCanLeave(): boolean {
    console.log("The view can leave?");
    this.showAlert();
    return this.clicked;
  }
  */
//alert info : https://www.freakyjolly.com/ionic-alert-this-alertcontroller-create/#.YD69NmhKhPY
//https://ionicframework.com/docs/v3/api/navigation/NavController/#nav-guards
  showAlert() {
    if(!this.clicked) {
      this.alertController.create({
        header: 'Are you sure you want to go back?',
        message: 'Your changes will not be saved',
        cssClass: 'buttonCss',
        buttons: [{
          cssClass: 'yes-button',
          text: 'Yes, go back',
          handler: () => {
            this.router.navigateByUrl('/tabs/profile/cooking-skills') //navigation: https://www.codegrepper.com/code-examples/javascript/navigation+to+next+component+in+button+click+angular
            this.clicked = false;
          } 
        },
        { 
          cssClass: 'no-button',
          text: 'No',
          handler: () => {
            this.clicked = true;
          }
        }]
      }).then(res => {
        res.present();
  
      });
    }
  }
  ngOnDestroy(){
    console.log("sup nerds? I should be destroyed now right?");
 }

  // test user storage for skills
  // loadData() {
  //   this.storage.get("skill").then((val) => {
  //     console.log('Your skill is', val);
  //   });
  // }

}
