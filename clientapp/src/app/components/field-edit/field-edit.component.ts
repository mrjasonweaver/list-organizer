import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-field-edit',
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.css']
})

/**This is a stateless component for editable inputs.
 * Application State, UI Constants, and local state is
 * passed down to dumb, stateless presenter components (@Input).
 * UI events are passed back up via event emitters (@Output).
 */
export class FieldEditComponent {
  /**State */
  @Input() fieldText: string;
  @Input() labelText: string;
  @Input() fieldDisabled: boolean;
}
