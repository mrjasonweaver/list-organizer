import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IssuesStore } from '../../store/issues';
import { UiStateStore } from '../../store/ui-state';
import { PageEvent, MatPaginator, MatTableDataSource } from '@angular/material';
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

  constructor(
    private issuesStore: IssuesStore,
    public uiStateStore: UiStateStore,
    private router: Router
  ) {}

  onPageChange(event, routeQueryParams) {
    const page = event.pageIndex + 1;
    const { sort, order } = routeQueryParams;
    return this.router.navigate(['/issues'], { queryParams: { sort, order, page } });
  }

  onSortData(event) {
  }

}
