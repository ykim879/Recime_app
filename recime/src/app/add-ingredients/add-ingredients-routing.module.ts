import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddIngredientsPage } from './add-ingredients.page';

const routes: Routes = [
  {
    path: '',
    component: AddIngredientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddIngredientsPageRoutingModule {}
