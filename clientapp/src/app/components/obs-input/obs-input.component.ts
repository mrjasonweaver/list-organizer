import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-obs-input',
  templateUrl: './obs-input.component.html',
  styleUrls: ['./obs-input.component.css']
})
export class ObsInputComponent {
  public inputValue: BehaviorSubject<any> = new BehaviorSubject('');

  get streamValue() {
    return this.inputValue;
  }

  onValueChange(e) {
    console.log('value', e);
    this.inputValue.next(e);
  }

}
