import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeSearchPage } from './recipe-search.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeSearchPageRoutingModule {}
