import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LikedRecipesPage } from './liked-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: LikedRecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikedRecipesPageRoutingModule {}
