import { TestBed } from '@angular/core/testing';

import { CompanyManagerService } from './company-manager.service';

describe('CompanyManagerService', () => {
  let service: CompanyManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
