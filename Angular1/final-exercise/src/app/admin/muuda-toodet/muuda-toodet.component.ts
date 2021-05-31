import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-muuda-toodet',
  templateUrl: './muuda-toodet.component.html',
  styleUrls: ['./muuda-toodet.component.css']
})
export class MuudaToodetComponent implements OnInit {
  editItemForm!: FormGroup;
  id = 0;

  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("itemId"));
    let item = this.itemService.getItem(this.id);
    this.editItemForm = new FormGroup({
      id: new FormControl(item.id),
      image: new FormControl(item.image),
      name: new FormControl(item.name),
      price: new FormControl(item.price)
    });
  }

  onSubmit(form: FormGroup): void {
   if (form.valid) {
      let formValue = form.value;
      let item = new Item(
        formValue.id,
        formValue.image,
        formValue.name,
        formValue.price
        )
      this.itemService.editItem(item, this.id);
      this.router.navigateByUrl("/admin/vaata-tooteid");
    }
  }
}