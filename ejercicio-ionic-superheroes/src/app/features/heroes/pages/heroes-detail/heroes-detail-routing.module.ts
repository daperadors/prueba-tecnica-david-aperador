import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesDetailPage } from './heroes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HeroesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesDetailPageRoutingModule {}
