import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatTooltipModule, MatCardModule } from '@angular/material';
import { SlicePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TruncatePipe } from './pipes/truncate-pipe/truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
  ],
  providers: [BrowserAnimationsModule, SlicePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
