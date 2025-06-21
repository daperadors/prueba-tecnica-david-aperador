import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { 
    path: 'heroes', 
    loadChildren: () => import('./features/heroes/heroes.module').then(m => m.HeroesModule) 
  },
  {
    path: '**',
    redirectTo: 'heroes',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }