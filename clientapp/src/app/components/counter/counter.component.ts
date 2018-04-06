import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from '../../reducers/count';
import { CountState } from '../../models/count';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<CountState>) { }

  ngOnInit() {
    this.count$ = this.store.select('count');
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  changeNumber(direction) {
    direction === 'up' ?  this.store.dispatch({ type: INCREMENT }) : this.store.dispatch({ type: DECREMENT });
  }
}
