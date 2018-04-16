import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const counterReducer = (state: number, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      console.log('increment');
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
};
