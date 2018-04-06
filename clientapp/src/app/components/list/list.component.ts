import { Component, OnInit } from '@angular/core';
import { Router, Params } from "@angular/router";
import { Filters, Item } from "../../models/items";
import { State } from '../../models'
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
  items: Observable<Item[]>;

  constructor(private router: Router, store: Store<State>) {
    this.filters = store.pipe(select('filters'));
    this.items = store.pipe(select('items'));
    console.log(this.items);
    // this.items = store.select('app').map(s => s.list.map(n => s.items[n]));
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
