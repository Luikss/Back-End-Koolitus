import { Injectable } from '@angular/core';
import { Person } from './person.model';

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
  
  removeAll(): void {
    this.people = [];
  }

  removeOne(index: number): void {
    this.people.splice(index, 1);
  }

  addOne(human: Person): void {
    this.people.push(human);
  }

  getOne(index: number): Person {
    return this.people[index];
  }

  getAll(): Person[] {
    return this.people.slice();
  }
}