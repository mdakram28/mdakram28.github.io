import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHolderComponent } from './blog-holder.component';

describe('BlogHolderComponent', () => {
  let component: BlogHolderComponent;
  let fixture: ComponentFixture<BlogHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
