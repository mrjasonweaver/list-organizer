import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IssuesService } from '../services/issues.service';
import { IIssue } from '../models/issues';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class IssuesStore {

  private _issues: BehaviorSubject<any> = new BehaviorSubject([]);
  public readonly issues: Observable<IIssue[]> = this._issues.asObservable();
  username: string = 'angular';
  repo: string = 'angular';
  page: number = 1;
  perPage: number = 10;

  constructor(private issuesService: IssuesService) {
    this.loadInitialData();
  }

  get issues$() {
    return this._issues;
  }

  loadInitialData() {
    this.issuesService.getIssues(this.username, this.repo, this.page, this.perPage).subscribe(res => this._issues.next(res),
      err => console.log('Error retrieving users')
    );
  }

}
