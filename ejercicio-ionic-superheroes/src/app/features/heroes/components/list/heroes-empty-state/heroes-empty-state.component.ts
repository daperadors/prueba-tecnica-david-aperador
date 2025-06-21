import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-heroes-empty-state',
  templateUrl: './heroes-empty-state.component.html',
  styleUrls: ['./heroes-empty-state.component.scss'],
})
export class HeroesEmptyStateComponent {
  @Output() refresh = new EventEmitter();

}
