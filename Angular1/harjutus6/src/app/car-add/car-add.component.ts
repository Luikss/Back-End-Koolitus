import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.carService.cars.push(form.value);
  }

}
