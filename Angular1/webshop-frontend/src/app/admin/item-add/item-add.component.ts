import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  barcode = 0;
  barcodeUnique = true;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  checkBarcodeUniqueness() {
    this.barcodeUnique = true;
    this.itemService.getItemsFromDatabase().subscribe(items => {
      items.forEach(item => {
        if (item.barcode == this.barcode) {
          this.barcodeUnique = false;
          return;
        }
      });
    })
  }

  onSubmit(form: NgForm): void {
    console.log(form);
    console.log(form.value);
    console.log(form.value.title);
    console.log(form.value.price);

    if (form.valid) {
      let formValue = form.value;
      let item = new Item(
        formValue.title,
        formValue.price,
        formValue.imgSrc,
        formValue.category,
        formValue.barcode
        )
      this.itemService.addItemToDatabase(item).subscribe(()=>{
        form.reset();
      });
    }
  }
}