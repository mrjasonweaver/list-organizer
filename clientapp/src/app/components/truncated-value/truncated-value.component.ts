import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-truncated-value',
  templateUrl: './truncated-value.component.html',
  styleUrls: ['./truncated-value.component.css']
})
export class TruncatedValueComponent implements OnInit {

  @Input() truncatedValue: string;
  @Input() isTruncated: boolean;
  @Input() truncateType: string;

  ngOnInit() {

  }

}
