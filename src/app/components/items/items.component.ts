import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public items: any;
  constructor() { }

  ngOnInit(): void {
    this.items=[
      {name:'kimono', price: 50, img: 'assets/img/judogi-white.jpg'},
      {name:'Mouth Guard', price: 5}
      ];
  }

}
