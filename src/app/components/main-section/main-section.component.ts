import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {


  public selectedCategory: string;
  constructor() { }

  ngOnInit(): void {
  }
  handleCat(category): any {
    this.selectedCategory = category;
  }
}
