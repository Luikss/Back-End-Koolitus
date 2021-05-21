import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars!: { type: string, make: string, model: string, year: number }[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.votaAndmebaasist().subscribe(itemsFromFirebase => {
      this.cars = [];
      for (const key in itemsFromFirebase) {
        const element = itemsFromFirebase[key];
        this.cars.push(element);
      }
      console.log(this.cars);
    });
  }

  onAddToDatabase() {
    this.carService.salvestaAndmebaasi().subscribe(()=>alert("Lisatud!"));
  }
}