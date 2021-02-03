import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitchenToolsPageRoutingModule } from './kitchen-tools-routing.module';

import { KitchenToolsPage } from './kitchen-tools.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitchenToolsPageRoutingModule
  ],
  declarations: [KitchenToolsPage]
})
export class KitchenToolsPageModule {}
