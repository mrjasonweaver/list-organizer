import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IIssuesObject,
        IIssue,
        IParams,
        unRepoSegments,
        queryParamsSegments } from '../models/issues';

@Injectable()
export class IssuesService {
  url = 'https://api.github.com/search/issues';

  constructor(private http: HttpClient) {}

  getIssues(params: IParams): Observable<IIssuesObject> {
    return this.http.get<IIssuesObject>(`${this.url}${unRepoSegments}${queryParamsSegments}`);
  }

}
