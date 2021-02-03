import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CookingSkillsPage } from './cooking-skills.page';

describe('CookingSkillsPage', () => {
  let component: CookingSkillsPage;
  let fixture: ComponentFixture<CookingSkillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingSkillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CookingSkillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
