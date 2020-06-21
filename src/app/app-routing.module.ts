import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainSectionComponent} from "./components/main-section/main-section.component";


const routes: Routes = [
  {
    path: '',
    component: MainSectionComponent,
  },
  {
    path: 'popular',
    component: MainSectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
