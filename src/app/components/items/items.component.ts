import {Component, Input, OnInit} from '@angular/core';
import {PRODUCTS} from '../../../assets/products';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() category: string;
  public items: any;
  constructor() { }

  ngOnInit(): void {
    // console.log(PRODUCTS);
    this.category = 'all';
    this.sortCategory(this.category);
    // console.log(this.items);
  }
  ngOnChanges() : void {
    this.sortCategory(this.category);
  }

  sortCategory(category: string) : any {
    this.allCategories();
    console.log(category);
    if(category !== 'all'){
      this.items = this.items.filter(obj => obj.category === category);
    }
  };
  allCategories() : any {
    this.items = PRODUCTS.map(curr => {
      return Object.values(curr);
    }).flat(2);
  };


}
