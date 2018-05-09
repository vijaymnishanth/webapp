import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndyedYarnDyeingComponent } from './undyed-yarn-dyeing.component';

describe('UndyedYarnDyeingComponent', () => {
  let component: UndyedYarnDyeingComponent;
  let fixture: ComponentFixture<UndyedYarnDyeingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndyedYarnDyeingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndyedYarnDyeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
