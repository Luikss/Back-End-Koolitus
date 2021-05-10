import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {
  mice  = [
    { name: "Miki", home: "Disneyland", image: "https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_3.jpeg/revision/latest?cb=20190305233033" },
    { name: "Hiir", age: 5, owner: "Kalle" },
    { name: "Minni", age: 7, image: "https://static.wikia.nocookie.net/disney/images/3/36/Minnie_Mouse_pose_.jpg/revision/latest/top-crop/width/360/height/450?cb=20170709133603" },
    { name: "Koduhiir", owner: "Sille", children: 1 },
    { name: "Hiir", age: 14, owner: "Malle" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
