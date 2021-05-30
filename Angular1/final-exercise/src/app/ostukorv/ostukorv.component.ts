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
  sumOfCart!: number;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.cartItems = this.itemService.getCartItems();
    this.calculateSumOfCart();
  }

  onEmptyCart(): void {
    this.itemService.emptyCart();
    this.cartItems = this.itemService.getCartItems();
    this.calculateSumOfCart();
  }

  onRemoveFromCart(index: number): void {
    this.itemService.removeFromCart(index);
    this.cartItems = this.itemService.getCartItems();
    this.calculateSumOfCart();
  }

  calculateSumOfCart(): void {
    this.sumOfCart = 0;
    this.cartItems.forEach(cartItem => {
      this.sumOfCart += cartItem.price;
    });
    this.itemService.cartItemsChanged.next(this.itemService.getCartItems());
  }
}