import { Component, OnInit } from '@angular/core';
import { ArrayService } from '../array.service';
import { Person } from '../person.model';
import { ValitudService } from '../valitud/valitud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  humans!: Person[];
  human!: Person;

  constructor(private arrayService: ArrayService,
    private valitudService: ValitudService,) { 
  }

  ngOnInit(): void {
    this.humans = this.arrayService.getAll();
  }

  onChoose(inimene: any): void {
    this.valitudService.addHuman(inimene);
  }

  onRemoveAll(): void {
    this.arrayService.removeAll();
    this.humans = this.arrayService.getAll();
  }

  onRemoveOne(i: number): void {
    this.arrayService.removeOne(i);
    this.humans = this.arrayService.getAll();
  }

  onAdd(human: Person): void {
    this.arrayService.addOne(human);
    this.humans = this.arrayService.getAll();
  }

  onGetOne(i: number): void {
    this.human = this.arrayService.getOne(i);
  }

  onGetAll(): void {
    this.humans = this.arrayService.getAll();
  }
}