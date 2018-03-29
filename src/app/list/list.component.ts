import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() {}

  public tooltipPosition;
  public id;
  public dateCreated;
  public truncateType;
  public truncateLength;

  ngOnInit() {
    this.tooltipPosition = 'above';
    this.id = '123456789123456789123456789';
    this.dateCreated = 'Aug 14, 2017';
    this.truncateType = 'middle';
    this.truncateLength = 9;
  }

}
