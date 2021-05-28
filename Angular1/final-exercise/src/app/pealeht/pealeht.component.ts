import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pealeht',
  templateUrl: './pealeht.component.html',
  styleUrls: ['./pealeht.component.css']
})
export class PealehtComponent implements OnInit {
  products = [{"id":27775664,"image":"https://ecoop.ee/assets/img/data/1/products/a39e09b5-c4e6-4773-84fb-263abadd3355_thumb","name":"Banaan","price":"1.19","base":"1.19"},{"id":64927913,"image":"https://ecoop.ee/assets/img/data/1/products/fbbd1ad2-fe24-4c14-82a4-a2f3f1938239_thumb","name":"Kurk Eesti, kiles Peipsi","price":"2.19","base":"2.19"},{"id":10024663,"image":"https://ecoop.ee/assets/img/data/1/products/55b921db-c66b-4d86-a42f-1675876de424_thumb","name":"Kirss-kobartomat 500g","price":"1.29","base":"2.58"},{"id":48374235,"image":"https://ecoop.ee/assets/img/data/1/products/58c80058-30b9-4b9f-8f22-0f7b771ef83a_thumb","name":"Punane paprika","price":"2.49","base":"2.49"},{"id":12758142,"image":"https://ecoop.ee/assets/img/data/1/products/8221f1d1-6f0a-4221-95e4-0754881482e8_thumb","name":"Värske kurk lühike","price":"1.29","base":"1.29"},{"id":44811340,"image":"https://ecoop.ee/assets/img/data/1/products/f18c8500-5ffa-4510-bdf3-0c3ab5ee9c28_thumb","name":"Pirn Conference","price":"1.39","base":"1.39"},{"id":94616834,"image":"https://ecoop.ee/assets/img/data/1/products/a911145d-03d7-4a60-a69f-4e9f62bcdeeb_thumb","name":"Õun Jonagored","price":"0.75","base":"0.75"},{"id":23485211,"image":"https://ecoop.ee/assets/img/data/1/products/3ed944c4-819f-4507-a0be-38d42a948e78_thumb","name":"Kadarbiku porgand 500g pestud","price":"0.49","base":"0.98"},{"id":68927364,"image":"https://ecoop.ee/assets/img/data/1/products/55a3de9d-a77d-43f8-bc64-4bc589d8bf3b_thumb","name":"Tomat","price":"0.99","base":"0.99"},{"id":91115455,"image":"https://ecoop.ee/assets/img/data/1/products/6dc76031-945d-4e39-b38b-e8fc1a0f844d_thumb","name":"Kurk import kiles","price":"1.89","base":"1.89"},{"id":48648037,"image":"https://ecoop.ee/assets/img/data/1/products/3f7573a4-f9db-432c-950e-93e21e28f0f5_thumb","name":"Õun Poola","price":"0.65","base":"0.65"},{"id":32216595,"image":"https://ecoop.ee/assets/img/data/1/products/22e15ff5-4b44-46c2-8901-8cff4641a850_thumb","name":"Kobartomat","price":"1.49","base":"1.49"},{"id":11453375,"image":"https://ecoop.ee/assets/img/data/1/products/6f2347af-41d0-4ca6-bc0f-edffb0440d54_thumb","name":"Sidrun","price":"1.39","base":"1.39"},{"id":97137984,"image":"https://ecoop.ee/assets/img/data/1/products/48252a6d-4a7b-48e6-be64-f0ea3048eb50_thumb","name":"Hele viinamari seemneteta 500g","price":"1.89","base":"3.78"},{"id":69946184,"image":"https://ecoop.ee/assets/img/data/1/products/5b29fd19-fd90-4b94-b2ce-0ed39b1de85c_thumb","name":"Porgand 500g pakitud Eesti","price":"0.49","base":"0.98"},{"id":42254647,"image":"https://ecoop.ee/assets/img/data/1/products/0e2e0966-4e3e-4cfc-bd8f-faa658450b5f_thumb","name":"Õun Royal Gala","price":"1.79","base":"1.79"},{"id":10920684,"image":"https://ecoop.ee/assets/img/data/1/products/9e0f3913-c03e-4c96-b31f-a591814e1739_thumb","name":"Kapsas varajane","price":"1.19","base":"1.19"},{"id":27711371,"image":"https://ecoop.ee/assets/img/data/1/products/c5824bc8-3a34-4015-a60a-b439e68be51c_thumb","name":"Zucchini ehk suvikõrvits","price":"1.89","base":"1.89"},{"id":65719466,"image":"https://ecoop.ee/assets/img/data/1/products/fef73ccb-2f83-4e3e-93ba-16d7fa93ef26_thumb","name":"Šampinjonid 250g","price":"0.69","base":"2.76"},{"id":31656666,"image":"https://ecoop.ee/assets/img/data/1/products/a03f7f0b-2fd6-488e-a8a8-e5e05ab64e0d_thumb","name":"Apelsin Valencia","price":"0.99","base":"0.99"},{"id":28160085,"image":"https://ecoop.ee/assets/img/data/1/products/cbc2b4b7-34c7-4d1d-aecf-8755ad2fae26_thumb","name":"Frillis lõigatud kiles","price":"1.09","base":"1.09"},{"id":81572653,"image":"https://ecoop.ee/assets/img/data/1/products/253d31fd-3ed9-4d96-adba-ee53674ee289_thumb","name":"Punane sibul","price":"0.69","base":"0.69"},{"id":52199608,"image":"https://ecoop.ee/assets/img/data/1/products/98f47b16-8f87-4d1c-a2d2-3955e50c92f5_thumb","name":"Roheline sibul 100g pakitud Eesti","price":"0.83","base":"8.30"},{"id":96735454,"image":"https://ecoop.ee/assets/img/data/1/products/65ce0abc-b129-4504-bf07-4d9c1daa9068_thumb","name":"Avokaado Hass võrgus 500g","price":"2.39","base":"4.78"}];

  constructor() { }

  ngOnInit(): void {
  }

}