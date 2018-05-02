import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { IUser } from '../models/users';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UsersStore {

  private users: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private usersService: UsersService) {
    this.loadInitialData();
  }

  get users$() {
    return this.users.asObservable();
  }

  loadInitialData() {
    this.usersService.getUsers().subscribe(res => this.users.next(res),
      err => console.log('Error retrieving users')
    );
  }

}
