import { TestBed, inject } from '@angular/core/testing';

import { UndyedYarnDyeingService } from './undyed-yarn-dyeing.service';

describe('UndyedYarnDyeingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UndyedYarnDyeingService]
    });
  });

  it('should be created', inject([UndyedYarnDyeingService], (service: UndyedYarnDyeingService) => {
    expect(service).toBeTruthy();
  }));
});
