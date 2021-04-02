import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;

  profileIcon = 'person-outline';
  profileIconFilled = 'person';
  searchIcon = 'search-outline';
  searchIconFilled = 'search';
  pantryIcon = 'file-tray-stacked-outline';
  pantryIconFilled = 'file-tray-stacked';
  profileTab = 'person-outline';
  searchTab = 'search-outline';
  pantryTab = 'file-tray-stacked-outline';

  constructor() { }

  ngOnInit() {
  }

  setCurrentTab() {
    // Stuff to switch icon from filled to outline and vice versa
    if (this.tabs.getSelected() === 'profile') {
      this.profileTab = this.profileIconFilled;
      this.searchTab = this.searchIcon;
      this.pantryTab = this.pantryIcon;
    } else if (this.tabs.getSelected() === 'recipe-search') {
      this.profileTab = this.profileIcon;
      this.searchTab = this.searchIconFilled;
      this.pantryTab = this.pantryIcon;
    } else if (this.tabs.getSelected() === 'pantry') {
      this.profileTab = this.profileIcon;
      this.searchTab = this.searchIcon;
      this.pantryTab = this.pantryIconFilled;
    }
  }

}
