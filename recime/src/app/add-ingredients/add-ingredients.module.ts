import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIngredientsPageRoutingModule } from './add-ingredients-routing.module';

import { AddIngredientsPage } from './add-ingredients.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddIngredientsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AddIngredientsPage]
})
export class AddIngredientsPageModule {}
