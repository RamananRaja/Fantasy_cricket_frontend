import { TestBed } from '@angular/core/testing';

import { ThirdPartyWebReqService } from './third-party-web-req.service';

describe('ThirdPartyWebReqService', () => {
  let service: ThirdPartyWebReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdPartyWebReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
