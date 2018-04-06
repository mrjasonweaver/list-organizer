import { Component, EventEmitter, Output, Inject, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import { Filters } from "../../models/items";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() filtersChange = new EventEmitter();

  @Input() set filters(v) {
    this.filtersForm.setValue({
      type: v.type,
      color: v.color,
      highRating: v.minRating >= 9
    }, {emitEvent: false});
  }

  filtersForm = new FormGroup({
    color: new FormControl(),
    type: new FormControl(),
    highRating: new FormControl(false),
  });

  constructor() {
    this.filtersForm.valueChanges.debounceTime(200).subscribe((value) => {
      this.filtersChange.next(this.createFiltersObject(value));
    });
  }

  private createFiltersObject({type, color, highRating}: { type: string, color: string, highRating: false }): Filters {
    const minRating = highRating ? 9 : 0;
    return {color: color || null, type: type || null, minRating};
  }

}
