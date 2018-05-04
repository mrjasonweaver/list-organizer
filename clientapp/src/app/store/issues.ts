import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IssuesService } from '../services/issues.service';
import { IIssue, IParams, params } from '../models/issues';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class IssuesStore {

  private _issues: BehaviorSubject<any> = new BehaviorSubject([]);
  public readonly issues: Observable<IIssue[]> = this._issues.asObservable();

  constructor(private issuesService: IssuesService) {
    this.loadInitialIssues();
  }

  get issues$() {
    return this._issues;
  }

  loadInitialIssues() {
    this.issuesService.getIssues(params)
      .subscribe(res => this._issues.next(res),
        err => console.log('Error retrieving issues')
      );
  }
  reloadIssues(userParams) {
    this.issuesService.getIssues(userParams)
      .subscribe(res => this._issues.next(res),
        err => console.log('Error retrieving issues')
      );
  }

}
