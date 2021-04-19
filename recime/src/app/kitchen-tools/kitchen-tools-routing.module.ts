import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeactivateGuard, KitchenToolsPage } from './kitchen-tools.page';

const routes: Routes = [
  {
    path: '',
    component: KitchenToolsPage,
    canDeactivate: [DeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DeactivateGuard]
})
export class KitchenToolsPageRoutingModule {}
