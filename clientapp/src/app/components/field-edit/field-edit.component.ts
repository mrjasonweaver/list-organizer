import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-field-edit',
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.css']
})
export class FieldEditComponent {
  @Input() fieldText: string;
  @Input() labelText: string;
  @Input() fieldDisabled: boolean;
}
