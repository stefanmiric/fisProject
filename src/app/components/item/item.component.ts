import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() name: string;
  @Input() price: number;
  @Input() stock: number;
  @Input() imgPath: string;
  @Output() addToCartEvent: EventEmitter<any> = new EventEmitter();
  public quantity: number;
  constructor() { }

  ngOnInit(): void {
    this.quantity = 0;
  }

  addToCart(): void {
    // console.log({name: this.name, quantity: this.quantity});
    this.addToCartEvent.emit({name: this.name, quantity: this.quantity});
  }

  // sendQuantity(): void {
  //   this.quantityEvent.emit(this.quantity);
  // }
  addQuantity(): void {
    if(this.quantity < this.stock){
      this.quantity++;
    }
  }
  subQuantity(): void {
    if(this.quantity >0){
      this.quantity--;
    }
  }
}
