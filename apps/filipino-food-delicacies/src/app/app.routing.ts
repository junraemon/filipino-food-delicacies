import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@filipino-food-delicacies/recipe').then(m => m.RecipeModule)
  },
  { path: '**', redirectTo: '/' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
