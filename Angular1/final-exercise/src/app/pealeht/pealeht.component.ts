import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-pealeht',
  templateUrl: './pealeht.component.html',
  styleUrls: ['./pealeht.component.css']
})
export class PealehtComponent implements OnInit {
  items!: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  onAddToCart(item: Item): void {
    this.itemService.addToCart(item);
  }
}