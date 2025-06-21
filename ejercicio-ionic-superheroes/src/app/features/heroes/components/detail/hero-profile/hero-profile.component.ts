import { Component, Input } from '@angular/core';
import { Hero } from '../../../models/hero.model';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss'],
})
export class HeroProfileComponent {
  @Input() hero!: Hero;

  onImageError(event: any): void {
    event.target.src = 'https://placehold.co/600x400';
  }
}
