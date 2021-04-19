import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeactivateGuard, CookingSkillsPage } from './cooking-skills.page';

const routes: Routes = [
  {
    path: '',
    component: CookingSkillsPage,
    canDeactivate: [DeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DeactivateGuard]
})
export class CookingSkillsPageRoutingModule {}
