import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Item[] = [];
  sumOfCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("CART componendis");
    this.cartItems = this.cartService.getCartItems();
    this.calculateSumOfCart();
  }

  onRemoveFromCart(index: number): void {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems();
    this.calculateSumOfCart();
  }

  onEmptyCart(): void {
    this.cartService.emptyCart();
    this.cartItems = this.cartService.getCartItems();
    this.calculateSumOfCart();
  }

  calculateSumOfCart(): void {
    this.sumOfCart = 0;
    this.cartItems.forEach(cartItem => {
      this.sumOfCart += cartItem.price;
    });
  }
}