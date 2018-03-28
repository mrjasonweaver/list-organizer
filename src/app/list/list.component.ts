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
  public tooltipActive: boolean;

  activateWebLayout() {
    this.tooltipActive = false;
  }
  activateTabletLayout() {
    this.tooltipActive = true;
  }

  ngOnInit() {
    this.tooltipPosition = 'above';
    this.id = '123456789123456789123456789';

    this.breakpointObserver.observe([
      Breakpoints.WebLandscape
    ]).subscribe(result => {
      if (result.matches) {
        this.activateWebLayout();
      }
    });
    this.breakpointObserver.observe([
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.activateTabletLayout();
      }
    });
  }

}
