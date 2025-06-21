import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-header-info',
  templateUrl: './heroes-header-info.component.html',
  styleUrls: ['./heroes-header-info.component.scss'],
})
export class HeroesHeaderInfoComponent {
  @Input() count!: number;
}
