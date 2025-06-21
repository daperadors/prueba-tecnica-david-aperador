import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('../heroes/pages/heroes-list/heroes-list.module').then(m => m.HeroesListPageModule) 
    },
      {
        path: ':id',
        loadChildren: () => import('../heroes/pages/heroes-detail/heroes-detail.module').then(m => m.HeroesDetailPageModule) 
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }