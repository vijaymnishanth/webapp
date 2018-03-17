import { TestBed, inject } from '@angular/core/testing';

import { DyeingOrderService } from './dyeing-order.service';

describe('DyeingOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DyeingOrderService]
    });
  });

  it('should be created', inject([DyeingOrderService], (service: DyeingOrderService) => {
    expect(service).toBeTruthy();
  }));
});
