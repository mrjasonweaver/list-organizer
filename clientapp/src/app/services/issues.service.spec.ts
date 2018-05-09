import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { IssuesService } from './issues.service';
import { IIssuesObject, IIssue, IParams, params, mockIssuesObject, unRepoSegments, queryParamsSegments } from '../models/issues';

describe('IssuesService', () => {
  let injector: TestBed;
  let service: IssuesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssuesService]
    });
    injector = getTestBed();
    service = injector.get(IssuesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([IssuesService], (service: IssuesService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getIssues', () => {
    it('should return an Observable<IIssuesObject>', () => {
  
      service.getIssues(params).subscribe(issues => {
        expect(issues.total_count).toBe(1000);
        expect(issues.items.length).toBe(2);
        expect(issues).toEqual(mockIssuesObject);
      });
  
      const req = httpMock.expectOne(`${service.url}${unRepoSegments}${queryParamsSegments}`);
      expect(req.request.method).toBe("GET");
      req.flush(mockIssuesObject);
    });

  });
});
