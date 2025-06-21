import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeroeLoadingSkeletonCardComponent } from './heroe-loading-skeleton-card.component';

describe('HeroeLoadingSkeletonCardComponent', () => {
  let component: HeroeLoadingSkeletonCardComponent;
  let fixture: ComponentFixture<HeroeLoadingSkeletonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeLoadingSkeletonCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroeLoadingSkeletonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
