import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndyedYarnPurchaseComponent } from './undyed-yarn-purchase.component';

describe('UndyedYarnPurchaseComponent', () => {
  let component: UndyedYarnPurchaseComponent;
  let fixture: ComponentFixture<UndyedYarnPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndyedYarnPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndyedYarnPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
