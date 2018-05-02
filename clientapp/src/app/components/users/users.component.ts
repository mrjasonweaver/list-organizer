import { Component, OnInit } from '@angular/core';
import { UsersStore } from '../../store/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userStore: UsersStore) { }

  ngOnInit() {
  }

}
