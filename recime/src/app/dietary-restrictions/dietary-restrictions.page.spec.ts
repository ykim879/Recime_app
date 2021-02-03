import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietaryRestrictionsPage } from './dietary-restrictions.page';

describe('DietaryRestrictionsPage', () => {
  let component: DietaryRestrictionsPage;
  let fixture: ComponentFixture<DietaryRestrictionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaryRestrictionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietaryRestrictionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
