import { TestBed } from '@angular/core/testing';
import { NbDateService, NbDateTimeAdapterService } from '@nebular/theme';

import { NbDateAdapterService, NbRangeAdapterService } from './datepicker-adapter';

describe('Date Adapters', () => {
  beforeEach(() => {
    const mockDateService = {
      parse() {},
      format() {},
      isValidDateString() {},
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: NbDateService, useValue: mockDateService },
        NbDateAdapterService,
        NbRangeAdapterService,
        NbDateTimeAdapterService,
      ],
    });
  });



});

