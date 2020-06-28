import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {PRODUCTS} from '../../../assets/products';
import {ProductService} from "../../product.service";
import {Products} from "../../products";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() category: string;
  public items: Products[];
  @Input() itemsToBuy: any[];
  @Output() addToCartEvent: EventEmitter<any> = new EventEmitter();

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => this.items = products
    );
    this.category = 'all';
    this.sortCategory(this.category);
    console.log(this.items);
  }
  ngOnChanges() : void {
    this.sortCategory(this.category);
  }

  sortCategory(category: string) : any {
    if(category !== 'All' && category !== 'all'){
      console.log('here');
      this.productService.getProductsByCategory(this.category).subscribe(
        products => this.items = products
      );
    }
    else {
      this.allCategories();
    }
  };
  allCategories() : any {
    this.productService.getProducts().subscribe(
      products => this.items = products
    );
  };
  handleCart(addedProduct: any[]) : any {
    // console.log(addedProduct);
    this.addToCartEvent.emit(addedProduct);
  };


}
