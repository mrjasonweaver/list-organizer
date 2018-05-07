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

  onPageChange(event) {
    const page = event.pageIndex + 1;
    return this.router.navigate(['/issues'], { queryParams: { page } });
  }

  onSortData(event) {
  }

}
