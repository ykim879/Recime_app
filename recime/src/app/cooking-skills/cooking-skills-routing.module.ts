import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookingSkillsPage } from './cooking-skills.page';

const routes: Routes = [
  {
    path: '',
    component: CookingSkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookingSkillsPageRoutingModule {}
