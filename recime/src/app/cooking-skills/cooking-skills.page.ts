import {Component, ComponentFactoryResolver, Injectable, OnInit, ViewChild} from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';
import {AlertController, ToastController} from '@ionic/angular';
import { Location } from '@angular/common';
import {ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {NavController, NavParams} from '@ionic/angular';
import {Observable} from "rxjs";

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
    private user: UserData,
    public storage: Storage,
    public alertController: AlertController,
    private router: Router,
    public navCtrl: NavController,
    private location: Location,
    public toastController:ToastController
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
    this.presentToast();
  }
  canDeactivate() {
    return !this.clicked;
  }
  //https://www.debugcn.com/en/article/74127847.html
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Changes have been saved.',
      duration: 2000,
      color: "dark"
    });
    toast.present();
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
}

@Injectable()
export class DeactivateGuard implements CanDeactivate<CookingSkillsPage> {
  constructor(public alertController: AlertController) {}
  canDeactivate(component: CookingSkillsPage,
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
  }
}
