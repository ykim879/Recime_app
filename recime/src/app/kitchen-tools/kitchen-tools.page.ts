import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';
import {AlertController, ToastController} from '@ionic/angular';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
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
  saveTools() {
    this.storage.set("tools", this.user.kitchenTools);
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
export class DeactivateGuard implements CanDeactivate<KitchenToolsPage> {
  constructor(public alertController: AlertController) {}
  canDeactivate(component: KitchenToolsPage,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.canDeactivate()) {
      console.log('hi')
      return new Promise((resolve, reject) => {
        this.alertController.create({
          header: 'Your changes have not been saved',
          message: 'Do you wanna save your changes?',
          cssClass: 'buttonCss',
          buttons: [{
            cssClass: 'yes-button',
            text: 'Yes, save changes',
            handler: () => {
              component.saveTools();
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
