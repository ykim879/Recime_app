import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KitchenToolsPage } from './kitchen-tools.page';

describe('KitchenToolsPage', () => {
  let component: KitchenToolsPage;
  let fixture: ComponentFixture<KitchenToolsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenToolsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KitchenToolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
