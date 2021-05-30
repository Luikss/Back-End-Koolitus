import { Injectable } from '@angular/core';
import { Item } from 'src/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsInCart: Item[] = [];
  private items = [{"id":11809690,"image":"https://www.euronics.ee/UserFiles/Products/Images/248381-379412-medium.png","name":"Sülearvuti Apple MacBook Air - Early 2020 (256 GB) SWE","price":999},{"id":25642579,"image":"https://www.euronics.ee/UserFiles/Products/Images/239821-366502-medium.png","name":"Sülearvuti Apple MacBook Pro 16'' (512 GB) SWE","price":2749},{"id":49783826,"image":"https://www.euronics.ee/UserFiles/Products/Images/282669-412980-medium.png","name":"Sülearvuti Apple MacBook Pro 13'' M1 (512 GB) SWE","price":1899},{"id":16593657,"image":"https://www.euronics.ee/UserFiles/Products/Images/272044-412980-medium.png","name":"Sülearvuti Apple MacBook Pro 13'' M1 (512 GB) SWE","price":1649},{"id":83760337,"image":"https://www.euronics.ee/UserFiles/Products/Images/271982-412939-medium.png","name":"Sülearvuti Apple MacBook Air M1 (512 GB) SWE","price":1349},{"id":87700753,"image":"https://www.euronics.ee/UserFiles/Products/Images/272006-412955-medium.png","name":"Sülearvuti Apple MacBook Air M1 (512 GB) SWE","price":1349},{"id":75994162,"image":"https://www.euronics.ee/UserFiles/Products/Images/278850-412980-medium.png","name":"Sülearvuti Apple MacBook Pro 13'' M1 (256 GB) SWE","price":1699},{"id":10521673,"image":"https://www.euronics.ee/UserFiles/Products/Images/252006-385210-medium.png","name":"Sülearvuti Apple MacBook Pro 13'' - Early 2020 (512 GB) SWE","price":2199},{"id":64785354,"image":"https://www.euronics.ee/UserFiles/Products/Images/239869-366502-medium.png","name":"Sülearvuti Apple MacBook Pro 16'' (1 TB) SWE","price":3199},{"id":50532147,"image":"https://www.euronics.ee/UserFiles/Products/Images/280146-412939-medium.png","name":"Sülearvuti Apple MacBook Air M1 (256 GB) SWE","price":1379},{"id":76766355,"image":"https://www.euronics.ee/UserFiles/Products/Images/274567-412939-medium.png","name":"Sülearvuti Apple MacBook Air M1 (256 GB) ENG","price":1379},{"id":98769029,"image":"https://www.euronics.ee/UserFiles/Products/Images/239809-366502-medium.png","name":"Sülearvuti Apple MacBook Pro 16'' (512 GB) RUS","price":2749},{"id":61436903,"image":"https://www.euronics.ee/UserFiles/Products/Images/239881-366502-medium.png","name":"Sülearvuti Apple MacBook Pro 16'' (1 TB) RUS","price":3199},{"id":48479357,"image":"https://www.euronics.ee/UserFiles/Products/Images/252018-385210-medium.png","name":"Sülearvuti Apple MacBook Pro 13'' - Early 2020 (1 TB) SWE","price":2449},{"id":87234789,"image":"https://www.euronics.ee/UserFiles/Products/Images/271994-412947-medium.png","name":"Sülearvuti Apple MacBook Air M1 (512 GB) SWE","price":1349},{"id":91912618,"image":"https://www.euronics.ee/UserFiles/Products/Images/272040-412980-medium.png","name":"Sülearvuti Apple MacBook Pro 13'' M1 (512 GB) RUS","price":1649},{"id":35263603,"image":"https://www.euronics.ee/UserFiles/Products/Images/279513-412955-medium.png","name":"Sülearvuti Apple MacBook Air M1 (256 GB) SWE","price":1379},{"id":66502418,"image":"https://www.euronics.ee/UserFiles/Products/Images/280211-412955-medium.png","name":"Sülearvuti Apple MacBook Air M1 (256 GB) RUS","price":1379},{"id":94113828,"image":"https://www.euronics.ee/UserFiles/Products/Images/252010-385210-medium.png","name":"Sülearvuti Apple MacBook Pro 13'' - Early 2020 (512 GB) RUS","price":2199},{"id":24026059,"image":"https://www.euronics.ee/UserFiles/Products/Images/271978-412939-medium.png","name":"Sülearvuti Apple MacBook Air M1 (512 GB) RUS","price":1409},{"id":68765605,"image":"https://www.euronics.ee/UserFiles/Products/Images/272002-412955-medium.png","name":"Sülearvuti Apple MacBook Air M1 (512 GB) RUS","price":1349},{"id":16304195,"image":"https://www.euronics.ee/UserFiles/Products/Images/272068-412988-medium.png","name":"Sülearvuti Apple MacBook Pro 13'' M1 (512 GB) SWE","price":1649},{"id":93819625,"image":"https://www.euronics.ee/UserFiles/Products/Images/252022-385210-medium.png","name":"Sülearvuti Apple MacBook Pro 13'' - Early 2020 (1 TB) RUS","price":2449},{"id":33334497,"image":"https://www.euronics.ee/UserFiles/Products/Images/283972-412939-medium.png","name":"Sülearvuti Apple MacBook Air M1 (512 GB) SWE","price":1649},{"id":37906903,"image":"https://www.euronics.ee/UserFiles/Products/Images/283892-412955-medium.png","name":"Sülearvuti Apple MacBook Air M1 (512 GB) SWE","price":1649},{"id":39097273,"image":"https://www.euronics.ee/UserFiles/Products/Images/284145-412980-medium.png","name":"Sülearvuti Apple MacBook Pro 13'' M1 (512 GB) RUS","price":1899},{"id":87896797,"image":"https://www.euronics.ee/UserFiles/Products/Images/283976-412980-medium.png","name":"Sülearvuti Apple MacBook Pro 13'' M1 (256 GB) RUS","price":1699},{"id":94804695,"image":"https://www.euronics.ee/UserFiles/Products/Images/272036-412980-medium.png","name":"Sülearvuti Apple MacBook Pro 13'' M1 (512 GB) ENG","price":1649},{"id":44580319,"image":"https://www.euronics.ee/UserFiles/Products/Images/285015-412955-medium.png","name":"Sülearvuti Apple MacBook Air M1 (256 GB) ENG","price":1379},{"id":11135203,"image":"https://www.euronics.ee/UserFiles/Products/Images/271990-412947-medium.png","name":"Sülearvuti Apple MacBook Air M1 (512 GB) RUS","price":1349}];

  constructor() { }

  addItem(item: Item): void {
    this.items.push(item);
  }

  getItems(): Item[] {
    return this.items;
  }

  addToCart(item: Item): void {
    this.itemsInCart.push(item);
  }

  getCartItems(): Item[] {
    return this.itemsInCart.slice();
  }

  emptyCart(): void {
    this.itemsInCart = [];
  }

  removeFromCart(index: number): void {
    this.itemsInCart.splice(index, 1);
  }
}