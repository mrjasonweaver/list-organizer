import { Http, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Filters, Item } from "../models/items";

@Injectable()
export class ItemsService {
  private url = 'http://localhost:4444';

  constructor(private http: Http) {}

  findItems(filters: Filters): Observable<{items: {[id: number]: Item}, list: number[]}> {
    const params = new URLSearchParams();
    params.set("color", filters.color);
    params.set("type", filters.type);
    params.set("minRating", filters.minRating.toString());
    return this.http.get(`${this.url}/items`, {search: params}).map(r => r.json());
  }

  findItem(id: number): Observable<Item> {
    const params = new URLSearchParams();
    params.set("id", id.toString());
    return this.http.get(`${this.url}/item/`, {search: params}).map(r => r.json()['item']);
  }

  rateItem(id: number, rating: number): Observable<any> {
    return this.http.post(`${this.url}/rate`, {id, yourRating: rating});
  }
}
