import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewBlogPage } from './new-blog.page';

describe('NewBlogPage', () => {
  let component: NewBlogPage;
  let fixture: ComponentFixture<NewBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
