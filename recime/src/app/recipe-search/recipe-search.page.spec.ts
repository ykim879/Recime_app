import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeSearchPage } from './recipe-search.page';

describe('RecipeSearchPage', () => {
  let component: RecipeSearchPage;
  let fixture: ComponentFixture<RecipeSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
