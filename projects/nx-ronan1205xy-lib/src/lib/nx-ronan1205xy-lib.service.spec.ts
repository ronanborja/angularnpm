import { TestBed } from '@angular/core/testing';

import { NxRonan1205xyLibService } from './nx-ronan1205xy-lib.service';

describe('NxRonan1205xyLibService', () => {
  let service: NxRonan1205xyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NxRonan1205xyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
