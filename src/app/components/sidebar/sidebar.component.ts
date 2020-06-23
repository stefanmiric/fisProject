import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// @ts-ignore
import {PRODUCTS} from '../../../assets/products';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() sendCat: EventEmitter<string> = new EventEmitter();
  public list: string[];
  constructor() {
  }

  ngOnInit(): void {
    this.list = PRODUCTS.map(curr => {
      return Object.keys(curr);
    }).flat();
    ;
    console.log(this.list);
  }

  sendCategory(category: string): any {
    this.sendCat.emit(category);
  }
}
