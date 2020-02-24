import { TestBed } from '@angular/core/testing';

import { ServicedataService } from './servicedata.service';

describe('ServicedataService', () => {
  let service: ServicedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
