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
    this.items = this.ItemService.getItems();
  }

  onDeleteItem(i: number): void {
    this.ItemService.deleteItem(i);
  }
}