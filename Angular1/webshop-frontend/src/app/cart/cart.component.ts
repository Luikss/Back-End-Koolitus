import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: {cartItem: Item, count: number}[] = [];
  sumOfCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.calculateSumOfCart();
  }

  onRemoveFromCart(index: number): void {
    this.cartService.removeFromCart(index);
    this.calculateSumOfCart();
  }

  onReduceFromCart(item: Item) {
    this.cartService.reduceFromCart(item);
    this.calculateSumOfCart();
  }

  onAddToCart(item: Item) {
    this.cartService.addToCart(item);
    this.calculateSumOfCart();
  }

  onEmptyCart(): void {
    this.cartService.emptyCart();
    this.calculateSumOfCart();
  }

  calculateSumOfCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.sumOfCart = 0;
    this.cartItems.forEach(cartItem => {
      this.sumOfCart += cartItem.cartItem.price * cartItem.count;
    });
    this.cartService.cartItemsChanged.next(this.cartService.getCartItems());
  }
}