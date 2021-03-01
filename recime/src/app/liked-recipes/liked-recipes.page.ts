import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liked-recipes',
  templateUrl: './liked-recipes.page.html',
  styleUrls: ['./liked-recipes.page.scss'],
})
export class LikedRecipesPage implements OnInit {
  defaultHref = '';
  constructor() { }
  ionViewDidEnter() {
    this.defaultHref = '../liked-recipes';
  }
  ngOnInit() {
  }

}
