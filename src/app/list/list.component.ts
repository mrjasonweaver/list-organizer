import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) {}

  public tooltipPosition;
  public id;
  public dateCreated;

  get isTabletScreen() {
    return this.breakpointObserver.isMatched('(max-width: 1040px)');
  }

  ngOnInit() {
    this.tooltipPosition = 'above';
    this.id = '123456789123456789123456789';
    this.dateCreated = 'Aug 14, 2017';
  }

}
