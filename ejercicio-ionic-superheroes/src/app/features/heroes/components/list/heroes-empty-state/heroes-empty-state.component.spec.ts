import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeroesEmptyStateComponent } from './heroes-empty-state.component';

describe('HeroesEmptyStateComponent', () => {
  let component: HeroesEmptyStateComponent;
  let fixture: ComponentFixture<HeroesEmptyStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesEmptyStateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesEmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
