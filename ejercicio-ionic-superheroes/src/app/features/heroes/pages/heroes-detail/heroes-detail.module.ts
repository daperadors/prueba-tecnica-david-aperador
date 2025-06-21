import { NgModule } from '@angular/core';

import { HeroesDetailPageRoutingModule } from './heroes-detail-routing.module';

import { HeroesDetailPage } from './heroes-detail.page';
import { HeroLoadingSkeletonDetailComponent } from '../../components/detail/hero-loading-skeleton-detail/hero-loading-skeleton-detail.component';
import { HeroProfileComponent } from '../../components/detail/hero-profile/hero-profile.component';
import { HeroStatsComponent } from '../../components/detail/hero-stats/hero-stats.component';
import { HeroesSharedModule } from '../../heroes-shared.module';

@NgModule({
  imports: [
    HeroesSharedModule,
    HeroesDetailPageRoutingModule
  ],
  declarations: [
    HeroesDetailPage, 
    HeroLoadingSkeletonDetailComponent,
    HeroProfileComponent,
    HeroStatsComponent
  ]
})
export class HeroesDetailPageModule {}
