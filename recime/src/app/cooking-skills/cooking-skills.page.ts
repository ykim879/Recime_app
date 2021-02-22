import { Component, OnInit,ViewChild } from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';

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
    private user: UserData, public storage: Storage
  ) { }

  ionViewDidEnter() {
    this.defaultHref = '../cooking-skills';
  }

  ngOnInit() {
    //user's skill is checked upon arrival to page
    this.storage.get("skill").then((val) => {
      this.chosen_skill = val;
    });
  }

  radioGroupChange(event) {
    this.selectedRadioGroup = event.detail;
  }

  radioSelect(event) {
    this.selectedRadioItem = event.detail;
  }

  saveSkills() {
    this.user.setSkillLevel(this.selectedRadioGroup.value);
    this.storage.set("skill", this.user.cookingSkills);
  }

  // test user storage for skills
  // loadData() {
  //   this.storage.get("skill").then((val) => {
  //     console.log('Your skill is', val);
  //   });
  // }

}
