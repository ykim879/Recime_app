import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddIngredientsPage } from './add-ingredients.page';

describe('AddIngredientsPage', () => {
  let component: AddIngredientsPage;
  let fixture: ComponentFixture<AddIngredientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIngredientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddIngredientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
