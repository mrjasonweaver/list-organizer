import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-truncate-tooltip-test',
  templateUrl: './truncate-tooltip-test.component.html',
  styleUrls: ['./truncate-tooltip-test.component.css']
})
export class TruncateTooltipTestComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) {}

  get isBreakpoint() {
    return this.breakpointObserver.isMatched('(max-width: 1000px)');
  }
  get isTooltipDisabled() {
    return !this.isBreakpoint;
  }
  public number = 1;
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
