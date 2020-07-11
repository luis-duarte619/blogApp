import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserBlogsPage } from './user-blogs.page';

describe('UserBlogsPage', () => {
  let component: UserBlogsPage;
  let fixture: ComponentFixture<UserBlogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBlogsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserBlogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
