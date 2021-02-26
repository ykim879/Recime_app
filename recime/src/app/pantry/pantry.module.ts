import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantryPageRoutingModule } from './pantry-routing.module';

import { PantryPage } from './pantry.page';

//type while in recime directory: npm i ng2-search-filter
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantryPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [PantryPage]
})
export class PantryPageModule {}
