import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  editItemForm!: FormGroup;
  id = 0;

  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("itemId"));
    this.itemService.getItem(this.id).subscribe(item => {
      this.editItemForm = new FormGroup({
        title: new FormControl(item.title),
        price: new FormControl(item.price),
        imgSrc: new FormControl(item.imgSrc),
        category: new FormControl(item.category)
      });
    });
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      let formValue = form.value;
      let item = new Item(
        formValue.title,
        formValue.price,
        formValue.imgSrc,
        formValue.category,
        this.id
        )
      this.itemService.editItem(item).subscribe(()=>{
        this.router.navigateByUrl("/admin/esemete-list");
      });
    }
  }
}