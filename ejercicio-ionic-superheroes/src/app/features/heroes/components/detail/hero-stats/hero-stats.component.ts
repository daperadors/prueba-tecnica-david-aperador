import { Component, Input } from '@angular/core';
import { Hero } from '../../../models/hero.model';

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.scss'],
})
export class HeroStatsComponent {
  @Input() hero!: Hero;
}
