import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
// @ts-ignore
// import {PRODUCTS} from '../../../assets/products';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {

  public _addedProducts: any[] = [];
  @Output() sendCat: EventEmitter<string> = new EventEmitter();
  public list: string[];
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.list = ["sports", "formal", "swimwear", "casual", "all"];
  };

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  @Input() set addedProducts(addedPr){
    this._addedProducts = addedPr;
    console.log(this._addedProducts);
  }
  sendCategory(category: string): any {
    this.sendCat.emit(category);
  };

  isAddedProductsEmpty(): boolean {
    if(this._addedProducts.length){
      return true;
    }
    return false;
  };
  goToCart() {
    this.router.navigate(['/cart'], {state: {products: this._addedProducts}});
  }
}
