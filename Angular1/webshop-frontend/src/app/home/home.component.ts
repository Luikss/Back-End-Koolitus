import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from '../admin/carousel-settings/carousel.service';
import { CarouselImage } from '../admin/carousel-settings/models/carousel-image.model';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';
import { Direction } from './direction.enum';
import { Property } from './property.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: CarouselImage[] = [];
  itemsOriginal: Item[] = [];
  itemsShown: Item[] = [];
  sortState =  {direction: Direction.ORIGINAL, property: Property.EMPTY};
  isItemAddedToCart = false;

  constructor(private cartService: CartService, 
    private itemService: ItemService,
    private config: NgbCarouselConfig,
    private carousel: CarouselService) { }

  ngOnInit(): void {
    this.carousel.getSettingsToFirebase().subscribe(settings => {
      this.carousel.getImagesFromFirebase().subscribe(images=>{
        for (const key in images) {
          this.images.push(images[key]);
        }
        if(this.images.length === 1) {
          this.config.showNavigationArrows = false;
          this.config.showNavigationIndicators = false;
        }
        this.config.interval = settings.interval;
        this.config.wrap = settings.wrap;
        this.config.keyboard = settings.keyboard;
        this.config.pauseOnHover = settings.pauseOnHover;
        this.config.animation = true;
      })
    })

    console.log("HOME componendis");
    this.itemService.getItemsFromDatabase().subscribe(items => {
      this.itemsOriginal = items;
      this.itemsShown = items;
    })
  }

  onCategorySelect(category: string) {
    this.itemsShown = this.itemsOriginal.filter(item => item.category == category);
  }

  onSortByTitle() {
    this.itemService.getItemsFromDatabase().subscribe(items => {
      this.itemsOriginal = items;
      this.itemsShown = items;
      switch (this.sortState.direction) {
        case Direction.ORIGINAL:
          this.itemsShown.sort((previousItem, currentItem)=>
            previousItem.title.localeCompare(currentItem.title))
            this.sortState.direction = Direction.ASC;
            this.sortState.property = Property.TITLE;
        break;
        case Direction.ASC:
          this.itemsShown.sort((previousItem, currentItem)=>
            currentItem.title.localeCompare(previousItem.title))
            this.sortState.direction = Direction.DESC;
            this.sortState.property = Property.TITLE;
        break;
        case Direction.DESC:
          this.sortState.direction = Direction.ORIGINAL;
          this.sortState.property = Property.EMPTY;
        break;
      }
    })
  }

  onSortByPrice() {
    this.itemService.getItemsFromDatabase().subscribe(items => {
      this.itemsOriginal = items;
      this.itemsShown = items;
      switch (this.sortState.direction) {
        case Direction.ORIGINAL:
          this.itemsShown.sort((previousItem, currentItem)=>
            previousItem.price - currentItem.price)
            this.sortState.direction = Direction.ASC;
            this.sortState.property = Property.PRICE;
        break;
        case Direction.ASC:
          this.itemsShown.sort((previousItem, currentItem)=>
          currentItem.price - previousItem.price)
            this.sortState.direction = Direction.DESC;
            this.sortState.property = Property.PRICE;
        break;
        case Direction.DESC:
          this.sortState.direction = Direction.ORIGINAL;
          this.sortState.property = Property.EMPTY;
        break;
      }
    })
  }

  onAddedToCart(wasAdded: boolean) {
    this.isItemAddedToCart = wasAdded;
    setTimeout(()=>this.isItemAddedToCart = false, 3000);
  }
}