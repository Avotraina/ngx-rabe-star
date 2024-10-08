import { TestBed } from '@angular/core/testing';

import { NgxRabeStarService } from './ngx-rabe-star.service';

describe('NgxRabeStarService', () => {
  let service: NgxRabeStarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRabeStarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
