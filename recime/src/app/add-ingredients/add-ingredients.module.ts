import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIngredientsPageRoutingModule } from './add-ingredients-routing.module';

import { AddIngredientsPage } from './add-ingredients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddIngredientsPageRoutingModule
  ],
  declarations: [AddIngredientsPage]
})
export class AddIngredientsPageModule {}
