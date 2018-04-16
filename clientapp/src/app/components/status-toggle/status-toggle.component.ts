import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-toggle',
  templateUrl: './status-toggle.component.html',
  styleUrls: ['./status-toggle.component.css']
})
export class StatusToggleComponent {
  @Input() status: boolean;
  @Input() statusLabel: string;
  @Output() statusToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  onStatusToggle(status: boolean) {
    this.statusToggle.emit(status);
    console.log(status);
  }
}
