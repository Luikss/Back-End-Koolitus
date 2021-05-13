import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:{imgSrc: string, title: string, price: number, category: string}[] = [];

  constructor(private cartService: CartService, private itemService: ItemService) {
   }

  ngOnInit(): void {
    console.log("HOME componendis");
    this.items = this.itemService.getItems();
  }

  onAddToCart(item: {imgSrc: string, title: string, price: number, category: string}) {
    this.cartService.addToCart(item);
  }
}