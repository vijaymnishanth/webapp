import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyeingOrderComponent } from './dyeing-order.component';

describe('DyeingOrderComponent', () => {
  let component: DyeingOrderComponent;
  let fixture: ComponentFixture<DyeingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyeingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyeingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
