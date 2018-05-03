import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IIssue } from '../models/issues';
import 'rxjs/add/operator/map';

@Injectable()
export class IssuesService {
  private url = 'https://api.github.com';
  username: string;
  repo: string;

  constructor(private http: HttpClient) {}

  getIssues(): Observable<IIssue[]> {
    return this.http.get<IIssue[]>(`${this.url}/repos/${this.username}/${this.repo}/issues`);
  }

}
