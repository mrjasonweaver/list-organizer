import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Params, ActivatedRouteSnapshot, RouteConfigLoadEnd } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { IAppState } from '../models';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

const firstSegment = (r: RouterNavigationAction) => r.payload.routerState.root.firstChild;

@Injectable()
export class ContactsEffects {

  @Effect() navigateToContacts = this.handleNavigation('contacts', (r: ActivatedRouteSnapshot) => {
    const pageNumber = +r.queryParamMap.get('page');
    const getContactsPayload = this.contactsService.findContacts(pageNumber)
      .map(resp => ( { type: 'CONTACTS_UPDATED', payload: resp } ) );
    return getContactsPayload;
  });

  @Effect() showSelectedContact = this.handleNavigation('contacts', (r: ActivatedRouteSnapshot) => {
    const selected = r.queryParamMap.get('selected');
    const getContactPayload = this.contactsService.findContact(+r.queryParamMap.get('selected'))
      .map(resp => ({type: 'CONTACT_UPDATED', payload: resp}));
    const resetContactPayload = {type: 'CONTACT_UPDATED', payload: {}};
    return selected ? getContactPayload : of(resetContactPayload);
  });

  constructor(private actions: Actions, private store: Store<IAppState>, private contactsService: ContactsService) {}

  private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: IAppState) => Observable<any>) {
    const first = this.actions.ofType(ROUTER_NAVIGATION).map(firstSegment);
    const nav = first.filter(s => s.routeConfig.path === segment);
    return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
      console.log('Network error', e);
      return of();
    });
  }
}
