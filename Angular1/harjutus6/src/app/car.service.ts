import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars = [
    { type: "sedan", make: "BMW", model: "i8", year: 2015 },
    { type: "sedan", make: "Audi", model: "a4", year: 2005 },
    { type: "touring", make: "Audi", model: "a6", year: 2011 },
    { type: "sedan", make: "Škoda", model: "Octavia", year: 2018 },
    { type: "hatchback", make: "Volkswagen", model: "Golf", year: 1997 },
    { type: "hatchback", make: "BMW", model: "316", year: 1998 },
    { type: "sedan", make: "Tesla", model: "S", year: 2019 },
    { type: "touring", make: "Volvo", model: "XC70", year: 2015 },
    { type: "sedan", make: "Lexus", model: "GS300", year: 2007 },
    { type: "hatchback", make: "Toyota", model: "Corolla", year: 2008 },
    { type: "touring", make: "Mercedes-Benz", model: "C220", year: 2009 },    
  ]

  constructor() { }
}
