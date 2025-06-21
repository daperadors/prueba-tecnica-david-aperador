import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../models/hero.model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent{
  @Output() onSelectHero: EventEmitter<Hero> = new EventEmitter();
  @Input() hero!: Hero;

  onImageError(event: any): void {
    event.target.src = 'https://placehold.co/600x500';
  }
  
  goToHero() {
    this.onSelectHero.emit(this.hero);
  }
}
