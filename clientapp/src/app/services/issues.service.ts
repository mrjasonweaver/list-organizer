import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IIssue } from '../models/issues';

@Injectable()
export class IssuesService {
  private url = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getIssues(username: string, repo: string, page: number, perPage: number): Observable<IIssue[]> {
    return this.http.get<IIssue[]>(`${this.url}/repos/${username}/${repo}/issues?page=${+page}&per_page=${+perPage}`);
  }

}
