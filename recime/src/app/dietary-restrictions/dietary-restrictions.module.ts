import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietaryRestrictionsPageRoutingModule } from './dietary-restrictions-routing.module';

import { DietaryRestrictionsPage } from './dietary-restrictions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietaryRestrictionsPageRoutingModule
  ],
  declarations: [DietaryRestrictionsPage]
})
export class DietaryRestrictionsPageModule {}
