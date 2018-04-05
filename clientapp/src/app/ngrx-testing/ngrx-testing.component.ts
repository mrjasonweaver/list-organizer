import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from './counter';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-ngrx-testing',
  templateUrl: './ngrx-testing.component.html',
  styleUrls: ['./ngrx-testing.component.css']
})
export class NgrxTestingComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.count$ = this.store.pipe(select('count'));
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  changeNumber(direction) {
    direction === 'up' ?  this.store.dispatch({ type: INCREMENT }) : this.store.dispatch({ type: DECREMENT });
  }

}
