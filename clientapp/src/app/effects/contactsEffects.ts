import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Params, ActivatedRouteSnapshot, RouteConfigLoadEnd } from "@angular/router";
import { ContactsService } from "../services/contacts.service";
import { Observable } from "rxjs/Observable";
import { Store, combineReducers } from "@ngrx/store";
import { Watch, Rate } from '../actions/items';
import { AppState } from '../models';
import { ContactsState, ContactState } from '../models/contacts';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ContactsEffects {

  @Effect() navigateToContacts = this.handleNavigation('contacts', (r: ActivatedRouteSnapshot) => this.getContactsPayload);

  @Effect() showSelectedContact = this.handleNavigation('contacts', (r: ActivatedRouteSnapshot) => {
    const selected = r.queryParamMap.get('selected');
    const getContactPayload = this.contactsService.findContact(+r.queryParamMap.get('selected')).map(resp => ({type: 'CONTACT_UPDATED', payload: resp}));
    const resetContactPayload = {type: 'CONTACT_UPDATED', payload: {}};
    return selected ? getContactPayload : of(resetContactPayload);
  });

  constructor(private actions: Actions, private store: Store<AppState>, private contactsService: ContactsService) {}

  private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: AppState) => Observable<any>) {
    const first = this.actions.ofType(ROUTER_NAVIGATION).map(firstSegment)
    const nav = first.filter(s => s.routeConfig.path === segment);
    return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
      console.log('Network error', e);
      return of();
    });
  }

  private getContactsPayload = this.contactsService.findContacts().map(resp => ({type: 'CONTACTS_UPDATED', payload: resp}));
}

const firstSegment = (r: RouterNavigationAction) => r.payload.routerState.root.firstChild;