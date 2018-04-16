import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // data
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() role: string;
  @Input() organization: string;
  @Input() phone: string;
  @Input() status: boolean;

  // labels
  @Input() firstNameLabel: string;
  @Input() lastNameLabel: string;
  @Input() emailLabel: string;
  @Input() phoneLabel: string;
  @Input() statusLabel: string;
  @Input() roleLabel: string;
  @Input() organizationLabel: string;
}
