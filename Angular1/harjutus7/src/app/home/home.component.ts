import { Component, OnInit } from '@angular/core';
import { ArrayService } from '../array.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  humans: any;
  human: any;

  constructor(private arrayService: ArrayService) { 
  }

  ngOnInit(): void {
    this.humans = this.arrayService.getAll();
  }

  onRemoveAll() {
    this.arrayService.removeAll();
    this.humans = this.arrayService.getAll();
  }

  onRemoveOne(i: number) {
    this.arrayService.removeOne(i);
    this.humans = this.arrayService.getAll();
  }

  onAdd(human: any) {
    this.arrayService.addOne(human);
    this.humans = this.arrayService.getAll();
  }

  onGetOne(i: number) {
    this.human = this.arrayService.getOne(i);
  }

  onGetAll() {
    this.humans = this.arrayService.getAll();
  }
}