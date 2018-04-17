import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-toggle',
  templateUrl: './status-toggle.component.html',
  styleUrls: ['./status-toggle.component.css']
})

/**This is a stateless component for status toggle.
 * Application State, UI Constants, and local state is
 * passed down to dumb, stateless presenter components (@Input).
 * UI events are passed back up via event emitters (@Output).
 */
export class StatusToggleComponent {
  /**State */
  @Input() status: boolean;
  @Input() statusLabel: string;
  // events
  @Output() statusToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**Capture toggle event and emit value
   * @param {boolean} status The status of the toggle.
   * @return Event emitted for toggle boolean
   */
  onStatusToggle(status: boolean) {
    console.log(status);
    return this.statusToggle.emit(status);
  }
}
