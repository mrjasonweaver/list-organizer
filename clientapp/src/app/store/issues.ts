import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IssuesService } from '../services/issues.service';
import { IIssuesObject, IIssue, IParams, params } from '../models/issues';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class IssuesStore {

  private _issuesObject: BehaviorSubject<any> = new BehaviorSubject({});
  public readonly issuesObject: Observable<IIssuesObject> = this._issuesObject.asObservable();

  constructor(private issuesService: IssuesService) {
    this.loadInitialIssues();
  }

  get issuesObject$() {
    return this._issuesObject;
  }

  loadInitialIssues() {
    this.issuesService.getIssues(params)
      .subscribe(res => this._issuesObject.next(res),
        err => console.log('Error retrieving issues')
      );
  }
  reloadIssues(userParams) {
    this.issuesService.getIssues(userParams)
      .subscribe(res => this._issuesObject.next(res),
        err => console.log('Error retrieving issues')
      );
  }

}
