import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit, OnChanges {


  public selectedCategory: string;
  public addedProducts : any[];

  constructor() {}

  ngOnInit(): void {
    this.addedProducts = [];
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  handleCat(category): any {
    this.selectedCategory = category;
  }


  handleCart(addedProduct : any){
    this.addedProducts.push(addedProduct);
  }
}
