import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IssuesService } from '../services/issues.service';
import { initialUiState, IUiState } from '../models/ui-state';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UiStateStore {

  private _uiState: BehaviorSubject<any> = new BehaviorSubject(initialUiState);
  public readonly uiState: Observable<IUiState> = this._uiState.asObservable();

  get uiState$() {
    return this._uiState;
  }

  startAction(message: string) {
    console.log(message);
    this._uiState.next({
        actionOngoing: true,
        message
    });
  }

  endAction(message: string) {
    console.log(message);
      this._uiState.next({
          actionOngoing: false,
          message
      });
  }

}
