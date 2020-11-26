import { TestBed } from '@angular/core/testing';

import { WebsiteserviceService } from './websiteservice.service';

describe('WebsiteserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebsiteserviceService = TestBed.get(WebsiteserviceService);
    expect(service).toBeTruthy();
  });
});
