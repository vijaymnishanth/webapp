import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UypViewComponent } from './uyp-view.component';

describe('UypViewComponent', () => {
  let component: UypViewComponent;
  let fixture: ComponentFixture<UypViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UypViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UypViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
