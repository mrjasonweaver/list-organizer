import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.activateWebLayout();
      }
    });
    breakpointObserver.observe([
      Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.matches) {
        this.activateTabletLayout();
      }
    });
  }

  public tooltipPosition;
  public id;
  public tooltipActive: boolean;

  activateWebLayout() {
    this.tooltipActive = false;
    console.log("Web Layout activated");
  }
  activateTabletLayout() {
    this.tooltipActive = true;
    console.log("Tablet Layout activated");
  }

  ngOnInit() {
    this.tooltipPosition = 'above';
    this.id = '123456789123456789123456789';
  }

}
