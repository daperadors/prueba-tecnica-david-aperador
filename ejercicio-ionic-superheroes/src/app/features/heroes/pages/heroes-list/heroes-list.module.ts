import { NgModule } from '@angular/core';

import { HeroesListPageRoutingModule } from './heroes-list-routing.module';

import { HeroesListPage } from './heroes-list.page';
import { HeroesEmptyStateComponent } from '../../components/list/heroes-empty-state/heroes-empty-state.component';
import { HeroeLoadingSkeletonCardComponent } from '../../components/list/heroe-loading-skeleton-card/heroe-loading-skeleton-card.component';
import { HeroCardComponent } from '../../components/list/hero-card/hero-card.component';
import { HeroesHeaderInfoComponent } from '../../components/list/heroes-header-info/heroes-header-info.component';
import { HeroesSharedModule } from '../../heroes-shared.module';

@NgModule({
  imports: [
    HeroesSharedModule,
    HeroesListPageRoutingModule
  ],
  declarations: [
    HeroesListPage, 
    HeroesEmptyStateComponent, 
    HeroeLoadingSkeletonCardComponent, 
    HeroCardComponent, 
    HeroesHeaderInfoComponent
  ],
})
export class HeroesListPageModule { }
