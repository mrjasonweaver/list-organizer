import { Injectable } from '@angular/core';
import { IssuesService } from '../services/issues.service';
import { IIssuesObject, IIssue, IParams, params } from '../models/issues';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UiStateStore } from './ui-state';
import { map } from 'rxjs/operators';

@Injectable()
export class IssuesStore {

  private _issuesObject: BehaviorSubject<any> = new BehaviorSubject({});
  public readonly issuesObject: Observable<IIssuesObject> = this._issuesObject.asObservable();

  constructor(private issuesService: IssuesService, public uiStateStore: UiStateStore) {
    this.navigate();
  }

  get issues$() {
    return this._issuesObject.pipe(map(res => res.items));
  }
  get issuesCount$() {
    return this._issuesObject.pipe(map(res => res.total_count));
  }

  navigate() {
    this.uiStateStore.routeQueryParams$.subscribe(x => {
      this.loadIssues({...params, sort: x.get('sort'), order: x.get('order'), page: x.get('page') });
    });
  }

  loadIssues(userParams) {
    this.uiStateStore.startAction('Retrieving issues...');
    this.issuesService.getIssues(userParams)
      .subscribe(res => {
        this._issuesObject.next(res);
        this.uiStateStore.endAction('Issues retrieved');
      },
        err =>  {
          this.uiStateStore.endAction('Error retrieving issues');
        }
      );
  }

}
