import { Component } from '@angular/core';
import { IssuesStore } from '../../store/issues';
import { UiStateStore } from '../../store/ui-state';
import { PageEvent } from '@angular/material/paginator';
import { IIssuesObject, issuesObject, IIssue, IParams, params } from '../../models/issues';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent {

  displayedColumns = ['number', 'user', 'title', 'created'];
  userParamOptions: IParams = params;
  issuesParent: IIssuesObject = issuesObject;
  pageEvent: PageEvent = {
    pageSize: this.userParamOptions.perPage,
    pageIndex: this.userParamOptions.page,
    length: this.issuesParent.total_count
  };
  sortEvent = {
    active: this.userParamOptions.sort,
    direction: this.userParamOptions.order
  }

  constructor(private issuesStore: IssuesStore, public uiStateStore: UiStateStore) {}

  onPageChange(event) {
    const page = event.pageIndex + 1;
    const { active: sort, direction: order} = this.sortEvent;
    const pageEvent = { ...this.userParamOptions, pageIndex: page };
    this.issuesStore.reloadIssues({ ...this.userParamOptions, sort, order, page });
  }

  onSortData(event) {
    console.log(event);
    const { active: sort, direction: order } = event;
    const page = this.pageEvent.pageIndex + 1;
    const sortEvent = { ...this.userParamOptions, sort, order };
    this.issuesStore.reloadIssues({...this.userParamOptions, sort, order, page });
  }

}
