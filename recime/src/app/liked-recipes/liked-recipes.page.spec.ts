import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LikedRecipesPage } from './liked-recipes.page';

describe('LikedRecipesPage', () => {
  let component: LikedRecipesPage;
  let fixture: ComponentFixture<LikedRecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedRecipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LikedRecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
