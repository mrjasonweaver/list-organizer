import { Component, OnInit } from '@angular/core';
import { Router, Params } from "@angular/router";
import { Filters, ItemsState } from "../../models/items";
import { AppState } from "../../models";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  filters: Observable<Filters>;
  items: Observable<any>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.filters = store.select('list').map(filter => filter.filters);
    // this.items = store.select(state => state.list);
    // this.items = store.pipe(select(state => state.app.list);
    // this.items = store.select(state => state.app.list).map(x => x.items);
    this.items = store.select('list').map(s => s.list.map(n => s.items[n]));
  }
  handleFiltersChange(filters: Filters): void {
    this.router.navigate(["/items", this.createParams(filters)]);
  }

  private createParams(filters: Filters): Params {
    const r: any = {};
    if (filters.color) r.color = filters.color;
    if (filters.type) r.type = filters.type;
    if (filters.minRating) r.minRating = filters.minRating;
    return r;
  }

}
