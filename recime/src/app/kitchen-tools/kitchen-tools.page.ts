import { Component, OnInit, ViewChild } from '@angular/core';
import { UserData } from '../user-data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-kitchen-tools',
  templateUrl: './kitchen-tools.page.html',
  styleUrls: ['./kitchen-tools.page.scss'],
})
export class KitchenToolsPage implements OnInit {

  defaultHref = '';
  selectedTools: string[] = [];

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
    private user: UserData, public storage: Storage
  ) { }

  ionViewDidEnter() {
    this.defaultHref = '../dietary-restrictions';
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
  }

  saveTools() {
    this.storage.set("tools", this.user.kitchenTools);
  }

  // test user storage of kitchen tools
  // loadData() {
  //   this.storage.get("tools").then((val) => {
  //     console.log("Kitchen tools: ", val);
  //   });
  // }

}
