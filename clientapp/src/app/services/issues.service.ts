import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IIssue } from '../models/issues';

@Injectable()
export class IssuesService {
  private url = 'https://api.github.com';
  username: string = 'angular';
  repo: string = 'angular';
  page: string = '1';
  perPage: string = '10';

  constructor(private http: HttpClient) {}

  getIssues(): Observable<IIssue[]> {
    return this.http.get<IIssue[]>(`${this.url}/repos/${this.username}/${this.repo}/issues?page=${this.page}&per_page=${this.perPage}`);
  }

}
