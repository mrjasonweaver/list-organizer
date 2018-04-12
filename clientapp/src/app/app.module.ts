import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { 
        MatButtonModule, 
        MatCheckboxModule, 
        MatTooltipModule, 
        MatCardModule,
        MatInputModule,
        MatTableModule,
        MatSidenavModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { SlicePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { TruncatePipe } from './pipes/truncate-pipe/truncate.pipe';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment'; // Angular CLI environemnt
import { TruncateTooltipTestComponent } from './components/truncate-tooltip-test/truncate-tooltip-test.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { initialState } from './models';
import { ContactsEffects } from './effects/contactsEffects';
import { appReducer } from './reducers';
import { counterReducer } from './reducers/count';
import { ItemsService } from './services/items.service';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { WatchService } from './services/watch.service';
import { FiltersComponent } from './components/filters/filters.component';
import { CounterComponent } from './components/counter/counter.component';
import { RepoDataComponent } from './components/repo-data/repo-data.component';
import { RepoService } from './services/repo.service';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsService } from './services/contacts.service';


// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  }
}
export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TruncatePipe,
    TruncateTooltipTestComponent,
    ItemsComponent,
    ItemComponent,
    ItemDetailsComponent,
    FiltersComponent,
    CounterComponent,
    RepoDataComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatTableModule,
    MatSidenavModule,
    StoreModule.forRoot(<any>appReducer, { initialState, metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    RouterModule.forRoot([
      // routes
      { path: '',  pathMatch: 'full', redirectTo: 'contacts' },
      { path: 'count',  pathMatch: 'full', component: CounterComponent },
      { path: 'list',  pathMatch: 'full', component: ListComponent },
      { path: 'repo-data',  pathMatch: 'full', component: RepoDataComponent },
      { path: 'truncate-tooltip',  pathMatch: 'full', component: TruncateTooltipTestComponent },
      { path: 'contacts',  pathMatch: 'full', component: ContactsComponent },
      { path: 'contact/:id', loadChildren: './contact/contact.module#ContactModule' },
    ], {useHash: true}),
    EffectsModule.forRoot([
      ContactsEffects
    ]),
    StoreRouterConnectingModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatSidenavModule,
  ],
  providers: [
    BrowserAnimationsModule, 
    SlicePipe,
    ItemsService,
    RepoService,
    WatchService,
    ContactsEffects,
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
