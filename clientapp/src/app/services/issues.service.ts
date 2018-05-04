import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IIssue, IParams } from '../models/issues';

@Injectable()
export class IssuesService {
  private url = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getIssues(params: IParams): Observable<IIssue[]> {
    return this.http.get<IIssue[]>(`${this.url}/repos/${params.username}/${params.repo}/issues?page=${params.page}&per_page=${params.perPage}`);
  }

}
