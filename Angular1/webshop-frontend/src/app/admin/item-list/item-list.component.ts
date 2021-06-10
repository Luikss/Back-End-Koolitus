import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {
    this.ItemService.getItemsFromDatabase().subscribe(items => {
      this.items = items;
    })
  }

  onDeleteItem(i: number | undefined): void {
    if(i) {
      this.ItemService.deleteItem(i).subscribe(()=>{
        this.ItemService.getItemsFromDatabase().subscribe(items => {
          this.items = items;
        })
      });
    }
    //this.ItemService.saveItemsToDatabase(this.items).subscribe();
  }
}