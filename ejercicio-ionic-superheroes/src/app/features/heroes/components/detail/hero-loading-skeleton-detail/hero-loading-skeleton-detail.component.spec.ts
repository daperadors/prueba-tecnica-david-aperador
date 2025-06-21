import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeroLoadingSkeletonDetailComponent } from './hero-loading-skeleton-detail.component';

describe('HeroLoadingSkeletonDetailComponent', () => {
  let component: HeroLoadingSkeletonDetailComponent;
  let fixture: ComponentFixture<HeroLoadingSkeletonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroLoadingSkeletonDetailComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroLoadingSkeletonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
