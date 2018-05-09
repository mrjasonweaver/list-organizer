import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { IssuesService } from './issues.service';
import { IIssuesObject, IIssue, IParams, params } from '../models/issues';

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
      const dummyIssuesObject: IIssuesObject = {
        total_count: 1000,
        items: [ 
          {
            id: 1,
            url: 'http://google.com',
            comments: 1,
            number: 1,
            title: 'This is a title',
            body: 'This is an issue',
            user: {
              login: 'bobby1',
            },
            created_at: '2018-05-09T14:39:24Z'
          }, {
            id: 2,
            url: 'http://google.com',
            comments: 2,
            number: 2,
            title: 'This is a title2',
            body: 'This is an issue2',
            user: {
              login: 'bobby2',
            },
            created_at: '2018-05-09T14:40:24Z'
          }
        ]
      }

      const unRepoSegments = `?q=repo:${params.username}/${params.repo}&sort=${params.sort}&order=${params.order}`;
      const queryParamsSegments = `page=${params.page}&per_page=${params.perPage}`;
  
      service.getIssues(params).subscribe(issues => {
        expect(issues.total_count).toBe(1000);
        expect(issues).toEqual(dummyIssuesObject);
      });
  
      const req = httpMock.expectOne(`${service.url}${unRepoSegments}&${queryParamsSegments}`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyIssuesObject);
    });

  });
});
