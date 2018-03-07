import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyeingOrderViewComponent } from './dyeing-order-view.component';

describe('DyeingOrderViewComponent', () => {
  let component: DyeingOrderViewComponent;
  let fixture: ComponentFixture<DyeingOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyeingOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyeingOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
