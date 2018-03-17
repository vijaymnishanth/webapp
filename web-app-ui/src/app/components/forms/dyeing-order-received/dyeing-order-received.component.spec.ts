import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyeingOrderReceivedComponent } from './dyeing-order-received.component';

describe('DyeingOrderReceivedComponent', () => {
  let component: DyeingOrderReceivedComponent;
  let fixture: ComponentFixture<DyeingOrderReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyeingOrderReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyeingOrderReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
