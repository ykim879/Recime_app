import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeSearchPageRoutingModule } from './recipe-search-routing.module';

import { RecipeSearchPage } from './recipe-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeSearchPageRoutingModule
  ],
  declarations: [RecipeSearchPage]
})
export class RecipeSearchPageModule {}
