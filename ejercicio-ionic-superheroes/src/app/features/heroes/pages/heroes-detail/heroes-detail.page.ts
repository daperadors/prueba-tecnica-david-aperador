import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Hero } from 'src/app/features/heroes/models/hero.model';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.page.html',
  styleUrls: ['./heroes-detail.page.scss'],
})
export class HeroesDetailPage {

  public hero!: Hero;

  constructor(
    private _router: Router,
    private _navigation: NavController
  ) { 
    this._getHero();
  }

  private _getHero() {
    try {
      const navigation = this._router.getCurrentNavigation();
      const hero = navigation['extras']['state']['hero'];
      if (!hero) return;
      
      this.hero = hero;
    } catch (error) {
      this._navigation.back();
    }
  }

}
