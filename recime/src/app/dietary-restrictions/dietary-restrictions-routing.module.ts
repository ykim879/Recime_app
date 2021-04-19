import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeactivateGuard, DietaryRestrictionsPage } from './dietary-restrictions.page';

const routes: Routes = [
  {
    path: '',
    component: DietaryRestrictionsPage,
    canDeactivate: [DeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DeactivateGuard]
})
export class DietaryRestrictionsPageRoutingModule {}
