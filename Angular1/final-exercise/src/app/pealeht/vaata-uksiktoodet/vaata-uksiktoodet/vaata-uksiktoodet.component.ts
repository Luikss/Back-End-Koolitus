import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-vaata-uksiktoodet',
  templateUrl: './vaata-uksiktoodet.component.html',
  styleUrls: ['./vaata-uksiktoodet.component.css']
})
export class VaataUksiktoodetComponent implements OnInit {
  item!: Item;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("itemId"));
    this.item = this.itemService.getItem(id);
  }

  onAddToCart(item: Item): void {
    this.itemService.addToCart(item);
  }
}