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
          path: 'onboard',
          children:
          [
            {
              path: '',
              loadChildren: () => import('../onboard/onboard.module').then( m => m.OnboardPageModule)
            },
          ]
        },
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
                children: [
                  {
                    path: '',
                    loadChildren: () => import('../liked-recipes/liked-recipes.module').then( m => m.LikedRecipesPageModule)
                  }, 
                  {
                    path: 'recipe/:recipeId',
                    loadChildren: () => import('../recipe/recipe.module').then(m => m.RecipePageModule)
                  }
                ]
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
              },
              {
                path: 'recipe/:recipeId',
                loadChildren: () => import('../recipe/recipe.module').then(m => m.RecipePageModule)
              },
              {
                path: 'filters',
                loadChildren: () => import('../filters/filters.module').then( m => m.FiltersPageModule)
               }
              ,
               {
                 path: 'recipe',
                 loadChildren: () => import('../recipe/recipe.module').then( m => m.RecipePageModule)
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
              },
              {
                path: 'add-ingredients',
                loadChildren: () => import('../add-ingredients/add-ingredients.module').then( m => m.AddIngredientsPageModule)
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
    redirectTo: '/tabs/onboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
