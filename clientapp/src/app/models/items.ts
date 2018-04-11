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
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

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