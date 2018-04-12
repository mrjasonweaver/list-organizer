import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import { Params, ActivatedRouteSnapshot } from "@angular/router";
import { ContactsService } from "../services/contacts.service";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";
import { Store, combineReducers } from "@ngrx/store";
import 'rxjs/add/operator/withLatestFrom';
import { Watch, Rate } from '../actions/items';
import { AppState } from '../models';
import { ContactsState } from '../models/contacts';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactsEffects {
  @Effect() navigateToContacts = this.handleNavigation('contacts', (r: ActivatedRouteSnapshot) => {
    return this.contactsService.findContacts().map(resp => ({type: 'CONTACTS_UPDATED', payload: resp}));
  });

  @Effect() navigateToContact = this.handleNavigation('contact/:id', (r: ActivatedRouteSnapshot, state: AppState) => {
    const id = +r.paramMap.get('id');
    if (! state.contacts[id]) {
      return this.contactsService.findContact(+r.paramMap.get('id')).map(resp => ({type: 'CONTACT_UPDATED', payload: resp}));
    } else {
      return of();
    }
  });

  constructor(private actions: Actions, private store: Store<AppState>, private contactsService: ContactsService) {}

  private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: AppState) => Observable<any>) {
    const nav = this.actions.ofType(ROUTER_NAVIGATION).map(firstSegment).filter(s => s.routeConfig.path === segment);

    return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
      console.log('Network error', e);
      return of();
    });
  }
}

function firstSegment(r: RouterNavigationAction) {
  return r.payload.routerState.root.firstChild;
}