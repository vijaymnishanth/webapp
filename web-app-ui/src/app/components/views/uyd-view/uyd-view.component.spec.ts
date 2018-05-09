import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UydViewComponent } from './uyd-view.component';

describe('UydViewComponent', () => {
  let component: UydViewComponent;
  let fixture: ComponentFixture<UydViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UydViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UydViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
