import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../models/users';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.url}/users`);
  }

  getUser(id: number): Observable<IUser> {
    const options = id ? { params: new HttpParams().set('id', id.toString()) } : {};
    return this.http.get<IUser>(`${this.url}/users/`, options).map(r => r['user']);
  }
}