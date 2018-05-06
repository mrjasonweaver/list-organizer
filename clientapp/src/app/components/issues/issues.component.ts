import { Component } from '@angular/core';
import { IssuesStore } from '../../store/issues';
import { UiStateStore } from '../../store/ui-state';
import { PageEvent } from '@angular/material/paginator';
import { IIssuesObject, issuesObject, IIssue, IParams, params } from '../../models/issues';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent {

  displayedColumns = ['number', 'user', 'title', 'date'];
  userParamOptions: IParams = params;
  issuesParent: IIssuesObject = issuesObject;
  pageEvent: PageEvent = {
    pageSize: this.userParamOptions.perPage,
    pageIndex: this.userParamOptions.page,
    length: this.issuesParent.total_count
  };

  constructor(private issuesStore: IssuesStore, public uiStateStore: UiStateStore) { }

  onPageChange(event) {
    const page = event.pageIndex + 1;
    this.issuesStore.reloadIssues({...this.userParamOptions, page });
  }

}
