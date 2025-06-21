import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeroesHeaderInfoComponent } from './heroes-header-info.component';

describe('HeroesHeaderInfoComponent', () => {
  let component: HeroesHeaderInfoComponent;
  let fixture: ComponentFixture<HeroesHeaderInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesHeaderInfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesHeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
