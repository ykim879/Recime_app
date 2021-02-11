import { Component, OnInit,ViewChild } from '@angular/core';
import { IonRadioGroup } from '@ionic/angular';
export enum CookingSkill { //maybe have to be in somewhere else
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Expert = "Expert"
}

@Component({
  selector: 'app-cooking-skills',
  templateUrl: './cooking-skills.page.html',
  styleUrls: ['./cooking-skills.page.scss'],
})
//enum article: https://stackoverflow.com/questions/38554562/how-can-i-use-ngfor-to-iterate-over-typescript-enum-as-an-array-of-strings

export class CookingSkillsPage implements OnInit {  
  @ViewChild('radioGroup') radioGroup: IonRadioGroup //for defualt choice
defaultHref = '';
selectedRadioItem:any;
radioselect = CookingSkill;
constructor() { }
ionViewDidEnter() {
  this.defaultHref = '../cooking-skills/cooking-skills.module';
}

radioGroupChange(event) {
  console.log("radioGroupChange",event.detail);
  this.radioselect  = event.detail; //change here after the updating User
}

radioFocus() {
  console.log("radioFocus");
}
radioSelect(event) {
  console.log("radioSelect",event.detail);
  this.selectedRadioItem = event.detail;
}
radioBlur() {
  console.log("radioBlur");
}
ngOnInit() {
}

}
