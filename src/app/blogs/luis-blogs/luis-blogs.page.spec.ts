import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuisBlogsPage } from './luis-blogs.page';

describe('LuisBlogsPage', () => {
  let component: LuisBlogsPage;
  let fixture: ComponentFixture<LuisBlogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuisBlogsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuisBlogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
