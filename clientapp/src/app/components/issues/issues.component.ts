import { Component, OnInit } from '@angular/core';
import { IssuesStore } from '../../store/issues';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  displayedColumns = ['number', 'user', 'title', 'state'];

  constructor(private issuesStore: IssuesStore) { }

  ngOnInit() {
  }

}
