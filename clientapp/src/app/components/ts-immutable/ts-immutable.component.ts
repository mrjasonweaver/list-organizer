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
  newChangedToCarBrands: Object;
  newBrandAdded: Object;
  newCarAdded: Object;
  newColorAdded: Object;
  newJeepColorAdded: Object;

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

    // add new car object to nested cars array
    // use object and array spread to add a new array item to an array nested in an object
    const addNewCar = { ...this.initialPayload, cars: [ ...this.initialPayload.cars, this.newCar ] };
    this.newCarAdded = addNewCar;

    // add 'Audi' to brands
    // use object and array spread to add a new array item to an array nested in an object
    const addNewBrand = { ...this.initialPayload, brands: [ ...this.initialPayload.brands, this.newBrand ] };
    this.newBrandAdded = addNewBrand;

    /** using both spread and rest operators */

    // change 'brands' property to 'carBrands'
    // first, add new 'carBrands' object and copy the array from 'brands'
    const addCarBrands = { ...this.initialPayload, carBrands: [ ...this.initialPayload.brands ] };
    // second, pull out brands and assign the rest to allExceptBrands
    const { brands: theBrands, ...allExceptBrands } = addCarBrands;
    this.newChangedToCarBrands = allExceptBrands;

    // add a new color to BMW colors array
    const { cars: theCars } = this.initialPayload; // grab cars array
    const [ bmw, ...withoutBmw ] = theCars; // bmw and the rest assignment
    const bmwWithBlue =  { ...bmw, colors: [ ...bmw.colors, 'blue' ] }; // new bmw object with blue color addded
    const newCars = [ bmwWithBlue, ...withoutBmw ]; // merge new cars array
    const addNewColor = { ...this.initialPayload, cars: newCars }; // add new cars array
    this.newColorAdded = addNewColor;

    // add a new color to Jeep colors array
    const carsObj = { ...theCars }; // transform cars array into object with object keys
    const { "4": jeep, ...withoutJeep } = carsObj; // jeep and the rest assignment
    const withoutJeepArray = Object.keys(withoutJeep).map(x => withoutJeep[x]); // turn back into array
    const jeepWithArmyGreen =  { ...jeep, colors: [ ...jeep.colors, 'army green' ] }; // new jeep object with army green color addded
    const carsWithNewJeepColor = [ ...withoutJeepArray, jeepWithArmyGreen ]; // merge new cars array
    const addNewJeepColor = { ...this.initialPayload, cars: carsWithNewJeepColor }; // add new cars array
    this.newJeepColorAdded = addNewJeepColor;

    // replace 'red' with 'saphire' in Ford Fiesta colors array
    
  }

}
