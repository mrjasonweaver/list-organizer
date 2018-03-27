import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  public tooltipPosition;
  public id;
  public tooltipActive: boolean;

  ngOnInit() {
    this.tooltipPosition = 'above';
    this.id = '123456789123456789123456789';
    this.tooltipActive = true;
  }

}
