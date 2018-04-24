import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts-immutable',
  templateUrl: './ts-immutable.component.html',
  styleUrls: ['./ts-immutable.component.css']
})
export class TsImmutableComponent implements OnInit {

  initialPayload = {
    brands: ['BMW', 'Cheverolet', 'Dodge', 'Ford', 'Jeep'],
    cars: [
        {
          'make': 'BMW',
          'model': 'X5',
          'colors': ['red', 'black', 'white', 'silver']
        },
        {
          'make': 'Cheverolet',
          'model': 'Bolt',
          'colors': ['blue', 'black', 'white', 'silver']
        },
        {
          'make': 'Dodge',
          'model': 'Charger',
          'colors': ['orange', 'black', 'white', 'silver']
        },
        {
          'make': 'Ford',
          'model': 'Fiesta',
          'colors': ['red', 'green', 'white', 'silver']
        },
        {
          'make': 'Jeep',
          'model': 'Wrangler',
          'colors': ['rhino', 'black', 'white', 'silver']
        },
      ]
  };
  motorcycles: Object = { motorcycleBrands: ['Honda', 'Harley Davidson', 'Kawasaki'] };
  copiedPayload: Object;
  newBrand = 'Audi';
  newCar: Object = {
    'make': 'Audi',
    'model': 'A6',
    'colors': ['red', 'black', 'white', 'silver']
  };
  data: Object | Array<any>;
  brands: Object;
  cars: Object;
  newWithMotorcycles: Object;
  newchangedToCarBrands: Object;

  ngOnInit() {

    /** rest operators */

    // returning new filtered objects
    const { brands, ...carsOnly} = this.initialPayload;
    const { cars, ...brandsOnly} = this.initialPayload;
    this.brands = brandsOnly;
    this.cars = carsOnly;

    /** spread operators */

    // shallow copy
    const copy = { ...this.initialPayload };
    this.copiedPayload = copy;

    // merge objects
    const withMotorcyles = { ...this.initialPayload, ...this.motorcycles };
    this.newWithMotorcycles = withMotorcyles;

    /** using both spread and rest operators */

    // change properties
    const addCarBrands = { ...this.initialPayload, carBrands: [ ...this.initialPayload.brands ] };
    const { brands: theBrands, ...allExceptBrands } = addCarBrands;
    this.newchangedToCarBrands = allExceptBrands;
  }

}
