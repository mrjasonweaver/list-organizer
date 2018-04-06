import { RouterAction } from '@ngrx/router-store';
import { Filters, Item } from '../models/items';
import { State } from '../models';
// actions
export type ItemsUpdated = { type: 'ITEMS_UPDATED', payload: { items: { [id: number]: Item }, list: number[] }, filters: Filters };
export type ItemUpdated = { type: 'ITEM_UPDATED', payload: Item };
export type Watch = { type: 'WATCH', payload: { itemId: number } };
export type ItemWatched = { type: 'ITEM_WATCHED', payload: { itemId: number } };
export type Rate = { type: 'RATE', payload: { itemId: number, rating: number } };
export type Unrate = { type: 'UNRATE', payload: { itemId: number, error: any } };
export type Action = RouterAction<State> | ItemsUpdated | ItemUpdated | Watch | ItemWatched | Rate | Unrate;