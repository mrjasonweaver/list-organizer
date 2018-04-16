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
        MatIconModule,
        MatSidenavModule } from '@angular/material';
import { SlicePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { TruncatePipe } from './pipes/truncate-pipe/truncate.pipe';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment'; // Angular CLI environemnt
import { TruncateTooltipTestComponent } from './components/truncate-tooltip-test/truncate-tooltip-test.component';
import { initialState } from './models';
import { ContactsEffects } from './effects/contactsEffects';
import { appReducer } from './reducers';
import { counterReducer } from './reducers/count';
import { CounterComponent } from './components/counter/counter.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsService } from './services/contacts.service';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    TruncateTooltipTestComponent,
    CounterComponent,
    ContactsComponent,
    ContactComponent,
    ContactsTableComponent,
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
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    StoreModule.forRoot(<any>appReducer, { initialState }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    RouterModule.forRoot([
      // routes
      { path: '', pathMatch: 'full', redirectTo: 'contacts' },
      { path: 'count', pathMatch: 'full', component: CounterComponent },
      { path: 'truncate-tooltip', pathMatch: 'full', component: TruncateTooltipTestComponent },
      { path: 'contacts', component: ContactsComponent },
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
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [
    BrowserAnimationsModule, 
    SlicePipe,
    ContactsEffects,
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
