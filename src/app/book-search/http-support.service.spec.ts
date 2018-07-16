import { TestBed, inject } from '@angular/core/testing';

import { HttpSupportService } from './http-support.service';

describe('HttpSupportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpSupportService]
    });
  });

  it('should be created', inject([HttpSupportService], (service: HttpSupportService) => {
    expect(service).toBeTruthy();
  }));
});
