import {Component, Input, OnInit} from '@angular/core';
import {Products} from "../../products";
import {Router} from "@angular/router";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public readyToBuy: any;
  public allProducts: any;
  constructor(private router: Router, private productService: ProductService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state;
    this.readyToBuy = state.products;
    this.productService.getProducts().subscribe(
      products=> this.allProducts = products
    );
  }

  ngOnInit(): void {
    // this.readyToBuy = [];
  }

  calcSum(): number {
    return this.readyToBuy.reduce((a,object)=>{
      return a + (object.quantity * (
        this.allProducts.find(item => item.name === object.name).price
      )
    )},0);
  }
}
