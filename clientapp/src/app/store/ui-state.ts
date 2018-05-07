import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IssuesService } from '../services/issues.service';
import { initialUiState, IUiState } from '../models/ui-state';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UiStateStore {

  private _uiState: BehaviorSubject<any> = new BehaviorSubject(initialUiState);
  public readonly uiState: Observable<IUiState> = this._uiState.asObservable();
  private _routeQueryParams: Observable<ParamMap>;

  constructor(private r: ActivatedRoute) {
     this._routeQueryParams = r.queryParamMap;
  }

  get routeQueryParams$() {
    return this._routeQueryParams;
  }
  get uiState$() {
    return this._uiState;
  }

  startAction(message: string) {
    this._uiState.next({
        actionOngoing: true,
        message
    });
  }

  endAction(message: string) {
      this._uiState.next({
          actionOngoing: false,
          message
      });
  }

}
