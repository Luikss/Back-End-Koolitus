import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArrayService } from '../array.service';

@Component({
  selector: 'app-person-new',
  templateUrl: './person-new.component.html',
  styleUrls: ['./person-new.component.css']
})
export class PersonNewComponent implements OnInit {

  constructor(private arrayService: ArrayService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.arrayService.addOne(form.value);
  }
}
