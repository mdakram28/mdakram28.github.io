import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HacksSectionComponent } from './hacks-section.component';

describe('HacksSectionComponent', () => {
  let component: HacksSectionComponent;
  let fixture: ComponentFixture<HacksSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HacksSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HacksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
