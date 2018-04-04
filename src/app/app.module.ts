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


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TruncatePipe,
    TruncatedValueComponent,
    BreakpointDirective,
    NgrxTestingComponent,
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
    StoreModule.forRoot({ count: counterReducer })
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
