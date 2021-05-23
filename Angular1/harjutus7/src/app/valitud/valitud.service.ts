import { Injectable } from '@angular/core';
import { Person } from '../person.model';

@Injectable({
  providedIn: 'root'
})
export class ValitudService {
  chosenPeople: Person[] = [];

  constructor() { }

  addHuman(human: Person): void {
    this.chosenPeople = JSON.parse(localStorage.getItem("people")!) || [];
    this.chosenPeople.push(human);
    localStorage.setItem("people", JSON.stringify(this.chosenPeople));
  }

  deleteHuman(index: number): void {
    this.chosenPeople = JSON.parse(localStorage.getItem("people")!) || [];
    this.chosenPeople.splice(index, 1);
    localStorage.setItem("people", JSON.stringify(this.chosenPeople));
  }

  deleteAllPeople(): void {
    this.chosenPeople = JSON.parse(localStorage.getItem("people")!) || [];
    this.chosenPeople = [];
    localStorage.setItem("people", JSON.stringify(this.chosenPeople));
  }
}