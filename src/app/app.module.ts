import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { 
        MatButtonModule, 
        MatCheckboxModule, 
        MatTooltipModule, 
        MatCardModule,
        MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { SlicePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TruncatePipe } from './pipes/truncate-pipe/truncate.pipe';
import { TruncatedValueComponent } from './truncated-value/truncated-value.component';
import { BreakpointDirective } from './breakpoint.directive';
import { NgrxTestingComponent } from './ngrx-testing/ngrx-testing.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx-testing/counter';
import { TruncateTooltipTestComponent } from './truncate-tooltip-test/truncate-tooltip-test.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TruncatePipe,
    TruncatedValueComponent,
    BreakpointDirective,
    NgrxTestingComponent,
    TruncateTooltipTestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    StoreModule.forRoot({ count: counterReducer }, {
      initialState: {
        count: 0
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [BrowserAnimationsModule, SlicePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
