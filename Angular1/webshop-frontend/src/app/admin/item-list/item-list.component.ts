import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items:{imgSrc: string, title: string, price: number, category: string}[] = [];

  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.ItemService.getItems();
  }

  onDeleteItem(i: number) {
    this.ItemService.deleteItem(i);
  }
}