import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainSectionComponent} from "./components/main-section/main-section.component";
import {ContactComponent} from "./components/contact/contact.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {CartComponent} from "./components/cart/cart.component";


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'popular',
    component: MainSectionComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'shop',
    component: MainSectionComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
