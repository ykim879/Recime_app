import { Component, OnInit, ViewChild } from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';
import {AlertController, ToastController} from '@ionic/angular';
@Component({
  selector: 'app-kitchen-tools',
  templateUrl: './kitchen-tools.page.html',
  styleUrls: ['./kitchen-tools.page.scss'],
})
export class KitchenToolsPage implements OnInit {

  defaultHref = '';
  selectedTools: string[] = [];
  clicked: boolean;
  toolList = [
    {
      name: 'toolList',
      value: 'airFryer',
      text: 'Air Fryer',
      disabled: false,
      isChecked: false
    },
    {
      name: 'toolList',
      value: 'microwave',
      text: 'Microwave',
      disabled: false,
      isChecked: false
    },
    {
      name: 'toolList',
      value: 'oven',
      text: 'Oven',
      disabled: false,
      isChecked: false
    },
    {
      name: 'toolList',
      value: 'slowCooker',
      text: 'Slow cooker',
      disabled: false,
      isChecked: false
    },
    {
      name: 'toolList',
      value: 'stove',
      text: 'Stove',
      disabled: false,
      isChecked: false
    },
    {
      name: 'toolList',
      value: 'Toaster',
      text: 'Toaster',
      disabled: false,
      isChecked: false
    }
  ];

  constructor(
    private user: UserData,
    public alertController: AlertController,
    public storage: Storage,
    public toastController:ToastController
  ) { }

  ionViewDidEnter() {
    this.defaultHref = '../dietary-restrictions';
    this.clicked = true;
  }

  ngOnInit() {
    //user's kitchen tools are checked upon arrival to page
    this.storage.get("tools").then((val) => {
      for (let i = 0; i < this.toolList.length; i++) {
        for (let item of val) {
          if (item === this.toolList[i].value) {
            this.toolList[i].isChecked = true;
          }
        }
      }
    });
  }

  itemChange(event) {
    if (!event.detail.checked) {
      this.user.removeKitchenTool(event.detail.value);
      const index = this.selectedTools.indexOf(event.detail.value);
        if (index > -1) {
            this.selectedTools.splice(index, 1);
        }
    } else {
      //no duplicates
      const index = this.user.kitchenTools.indexOf(event.detail.value);
        if (index <= -1) {
          this.user.addKitchenTool(event.detail.value);
          this.selectedTools.push(event.detail.value);
        }
    }
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
            this.saveTools();
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
  saveTools() {
    this.storage.set("tools", this.user.kitchenTools);
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
