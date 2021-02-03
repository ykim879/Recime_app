import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        {
          path: 'profile',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
              },
              {
                path: 'cooking-skills',
                loadChildren: () => import('../cooking-skills/cooking-skills.module').then( m => m.CookingSkillsPageModule)
              },
              {
                path: 'dietary-restrictions',
                loadChildren: () => import('../dietary-restrictions/dietary-restrictions.module').then( m => m.DietaryRestrictionsPageModule)
              },
              {
                path: 'kitchen-tools',
                loadChildren: () => import('../kitchen-tools/kitchen-tools.module').then( m => m.KitchenToolsPageModule)
              },
              {
                path: 'liked-recipes',
                loadChildren: () => import('../liked-recipes/liked-recipes.module').then( m => m.LikedRecipesPageModule)
              },
            ]
        },
        {
          path: 'recipe-search',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../recipe-search/recipe-search.module').then( m => m.RecipeSearchPageModule)
              }
            ]
        },
        {
          path: 'pantry',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../pantry/pantry.module').then( m => m.PantryPageModule)
              }
            ]
        },
        {
          path: '',
          redirectTo: '/tabs/profile',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/tabs/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
