import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietaryRestrictionsPage } from './dietary-restrictions.page';

const routes: Routes = [
  {
    path: '',
    component: DietaryRestrictionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietaryRestrictionsPageRoutingModule {}
