import { Component, OnInit,ViewChild } from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-cooking-skills',
  templateUrl: './cooking-skills.page.html',
  styleUrls: ['./cooking-skills.page.scss'],
})

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
    public alertController: AlertController
  ) { }

  ionViewDidEnter() {
    this.defaultHref = '../cooking-skills';
    this.clicked = true;
  }

  ngOnInit() {
    //user's skill is checked upon arrival to page
    this.storage.get("skill").then((val) => {
      this.chosen_skill = val;
    });
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
//alert info : https://www.freakyjolly.com/ionic-alert-this-alertcontroller-create/#.YD69NmhKhPY
  showAlert() {
    if(!this.clicked) {
    this.alertController.create({
      header: 'Are you sure you want to go back?',
      message: 'Your changes will not be saved',
      buttons: [{
        text: 'Yes, go back',
        handler: () => {
          console.log("Yes")
        } 
      },
      { 
        text: 'No',
        handler: () => {
          console.log("No clicked")
        }
      }]
    }).then(res => {

      res.present();

    });
  }
  }

  // test user storage for skills
  // loadData() {
  //   this.storage.get("skill").then((val) => {
  //     console.log('Your skill is', val);
  //   });
  // }

}
