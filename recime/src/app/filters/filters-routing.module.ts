import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DeactivateGuard, FiltersPage} from './filters.page';

const routes: Routes = [
  {
    path: '',
    component: FiltersPage,
    canDeactivate: [DeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DeactivateGuard]
})
export class FiltersPageRoutingModule {}
