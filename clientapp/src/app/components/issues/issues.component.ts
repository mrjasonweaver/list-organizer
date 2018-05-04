import { Component, OnInit } from '@angular/core';
import { IssuesStore } from '../../store/issues';
import { PageEvent } from '@angular/material/paginator';
import { IIssue, IParams, params } from '../../models/issues';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  displayedColumns = ['number', 'user', 'title', 'date'];
  userParamOptions: IParams = params;
  pageEvent: PageEvent = { pageSize: this.userParamOptions.perPage, pageIndex: this.userParamOptions.page, length: 100 };

  constructor(private issuesStore: IssuesStore) { }

  ngOnInit() {
  }

  onPageChange(event) {
    console.log(event);
    const page = event.pageIndex + 1;
    this.issuesStore.reloadIssues({...this.userParamOptions, page });
  }

}
