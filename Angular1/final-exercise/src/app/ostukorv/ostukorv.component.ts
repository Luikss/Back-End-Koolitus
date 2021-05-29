import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  cartItems: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.cartItems = this.itemService.getCartItems();
  }

  onEmptyCart(): void {
    this.itemService.emptyCart();
    this.cartItems = this.itemService.getCartItems();
  }

  onRemoveFromCart(index: number): void {
    this.itemService.removeFromCart(index);
    this.cartItems = this.itemService.getCartItems();
  }
}