import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void {
    if (form.valid) {
      let formValue = form.value;
      let item = new Item(
        formValue.id,
        formValue.image,
        formValue.name,
        formValue.price
        )
        this.itemService.addItem(item);
        form.reset();
    }
  }
}