import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import { Params, ActivatedRouteSnapshot } from "@angular/router";
import { ItemsService } from "../services/items.service";
import { WatchService } from "../services/watch.service";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";
import { Store, combineReducers } from "@ngrx/store";
import 'rxjs/add/operator/withLatestFrom';
import { Watch, Rate } from '../actions/items';
import { State } from '../models';

// state
export type Item = { id: number, type: string, color: string, description: string, yourRating: number, rating: number };
export type Filters = { type: string, color: string, minRating: number };
export type ItemsState = { items: { [id: number]: Item }, list: number[], filters: Filters, watched: { [id: number]: boolean } };

export const InitialItemsState: ItemsState = {
  filters: {color: "", type: "", minRating: 0},
  items: {},
  list: [],
  watched: {}
};

@Injectable()
export class ItemsEffects {
  @Effect() navigateToItems = this.handleNavigation('items', (r: ActivatedRouteSnapshot) => {
    const filters = createFilters(r.params);
    return this.itemsService.findItems(filters).map(resp => ({type: 'ITEMS_UPDATED', payload: {...resp, filters}}));
  });

  @Effect() navigateToItem = this.handleNavigation('item/:id', (r: ActivatedRouteSnapshot, state: State) => {
    const id = +r.paramMap.get('id');
    if (! state.app.list.items[id]) {
      return this.itemsService.findItem(+r.paramMap.get('id')).map(resp => ({type: 'ITEM_UPDATED', payload: resp}));
    } else {
      return of();
    }
  });

  @Effect() rateItem = this.actions.ofType('RATE').
    switchMap((a: Rate) => {
      return this.itemsService.rateItem(a.payload.itemId, a.payload.rating).switchMap(() => of()).catch(e => {
        console.log('Error', e);
        return of({type: 'UNRATE', payload: {itemId: a.payload.itemId}});
      });
    });

  @Effect() watchItem = this.actions.ofType('WATCH').
    map((a: Watch) => {
      this.watch.watch(a.payload.itemId);
      return {type: 'ITEM_WATCHED', payload: a.payload};
    });

  constructor(private actions: Actions, private store: Store<State>, private itemsService: ItemsService, private watch: WatchService) {
  }

  private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: State) => Observable<any>) {
    const nav = this.actions.ofType(ROUTER_NAVIGATION).
      map(firstSegment).
      filter(s => s.routeConfig.path === segment);

    return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
      console.log('Network error', e);
      return of();
    });
  }
}


function firstSegment(r: RouterNavigationAction) {
  return r.payload.routerState.root.firstChild;
}


function createFilters(p: Params): Filters {
  return {color: p['color'] || null, type: p['type'] || null, minRating: p['minRating'] ? +p['minRating'] : 0};
}