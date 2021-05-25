import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from '../admin/carousel-settings/carousel.service';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images!: string[];
  items: Item[] = [];

  constructor(private cartService: CartService, 
    private itemService: ItemService,
    private config: NgbCarouselConfig,
    private carousel: CarouselService) { }

  ngOnInit(): void {
    this.carousel.getSettingsToFirebase().subscribe(settings => {
      this.images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
      this.config.interval = settings.interval;
      this.config.wrap = settings.wrap;
      this.config.keyboard = settings.keyboard;
      this.config.pauseOnHover = settings.pauseOnHover;
      if(this.images.length === 1) {
        this.config.showNavigationArrows = false;
        this.config.showNavigationIndicators = false;
      }
    });

    console.log("HOME componendis");
    this.itemService.getItemsFromDatabase().subscribe(items => {
      for (const key in items) {
        this.items.push(items[key]);
      }
    })
  }

  onAddToCart(item: Item): void {
    this.cartService.addToCart(item);
    this.cartService.cartItemsChanged.next(this.cartService.getCartItems());
  }
}