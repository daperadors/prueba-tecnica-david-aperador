import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HeroesApiService } from '../../services/heroes.service';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.page.html',
  styleUrls: ['./heroes-list.page.scss'],
})
export class HeroesListPage implements OnInit {

  public isLoadingData: boolean = false;
  public heroes: Hero[] = [];

  constructor(
    private _heroesService: HeroesApiService,
    private _alertController: AlertController,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    try {
      this.isLoadingData = true;
      const response = await this._heroesService.getHeroes();

      if (response.code !== 200) throw new Error(response.status);

      this.heroes = response.data.results;

      this.isLoadingData = false;
    } catch (error) {
      (await this._alertController.create({
        header: 'Error',
        message: 'Ha ocurrido un error al cargar los datos. Por favor, inténtalo de nuevo más tarde.',
        buttons: ['Aceptar']
      })).present();
      this.isLoadingData = false;
    }
  }

  trackByHeroId(index: number, hero: any): any {
    return hero.id;
  }

  refreshHeroes(): void {
    this.loadData();
  }

  goToHero(hero: Hero) {
    this._router.navigate(['/heroes', hero.id], {
      state: {
        hero: hero
      }
    });
  }

}
