import { InitialCountState, CountState } from './count';
import { InitialItemsState, ItemsState } from './items';

export type AppState = { counter: CountState, list: ItemsState };
export type State = { app: AppState };

export const initialState = {
  ...InitialCountState,
  ...InitialItemsState
}
