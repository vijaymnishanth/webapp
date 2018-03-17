import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdoViewComponent } from './rdo-view.component';

describe('RdoViewComponent', () => {
  let component: RdoViewComponent;
  let fixture: ComponentFixture<RdoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
