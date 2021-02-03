import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikedRecipesPageRoutingModule } from './liked-recipes-routing.module';

import { LikedRecipesPage } from './liked-recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikedRecipesPageRoutingModule
  ],
  declarations: [LikedRecipesPage]
})
export class LikedRecipesPageModule {}
