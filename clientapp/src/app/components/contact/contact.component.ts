import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() role: string;
  @Input() organization: string;
  @Input() phone: string;
  @Input() status: boolean;
  @Input() firstNameLabel: string;
}
