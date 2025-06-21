import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesListPage } from './heroes-list.page';

const routes: Routes = [
  {
    path: '',
    component: HeroesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesListPageRoutingModule {}
