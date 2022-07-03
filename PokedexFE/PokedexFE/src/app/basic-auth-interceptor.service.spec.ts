import { TestBed } from '@angular/core/testing';

import { BasicAuthInterceptorService } from './basic-auth-interceptor.service';
import {AuthenticationService} from "./login/auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('BasicAuthInterceptorService', () => {
  let service: BasicAuthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[AuthenticationService],
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(BasicAuthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
