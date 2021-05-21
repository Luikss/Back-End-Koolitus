import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  id!: number;
  car!: { type: string, make: string, model: string, year: number };
  carEditForm!: FormGroup;

  constructor(private route: ActivatedRoute,
    private carService: CarService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.car = this.carService.cars[this.id];
    this.carEditForm = new FormGroup({
      type: new FormControl(this.car.type),
      make: new FormControl(this.car.make),
      model: new FormControl(this.car.model),
      year: new FormControl(this.car.year)
    })
  }

  onSubmit(form: FormGroup) {
    this.carService.cars[this.id] = form.value;
    this.router.navigateByUrl("/");
  }
}