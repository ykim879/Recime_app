import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitchenToolsPage } from './kitchen-tools.page';

const routes: Routes = [
  {
    path: '',
    component: KitchenToolsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitchenToolsPageRoutingModule {}
