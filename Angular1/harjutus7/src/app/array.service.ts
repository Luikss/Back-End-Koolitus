import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  people = [
    { firstName: "Anna", lastName: "Annik", age: 21, address: "Estonia" },
    { firstName: "Birgit", lastName: "Beez", age: 19, address: "Estonia" },
    { firstName: "Carolyn", lastName: "Cipris", age: 18, address: "Estonia" },
    { firstName: "Diana", lastName: "Diivan", age: 25, address: "Estonia" },
    { firstName: "Eduard", lastName: "Ernsto", age: 29, address: "Estonia" },
    { firstName: "Friedrich", lastName: "Faust", age: 23, address: "Estonia" },
    { firstName: "Gustav", lastName: "Gross", age: 32, address: "Estonia" },
    { firstName: "Harri", lastName: "Hoop", age: 21, address: "Estonia" },
    { firstName: "Ilmar", lastName: "Iisak", age: 25, address: "Estonia" },
    { firstName: "Joonas", lastName: "Jutt", age: 26, address: "Estonia" }
  ];

  constructor() { }
  
  removeAll() {
    this.people = [];
  }

  removeOne(index: number) {
    this.people.splice(index, 1);
  }

  addOne(human: any) {
    this.people.push(human);
  }

  getOne(index: number) {
    return this.people[index];
  }

  getAll() {
    return this.people.slice();
  }
}
