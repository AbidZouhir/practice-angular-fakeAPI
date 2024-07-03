import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {MyFirstComponentComponent} from "./my-first-component/my-first-component.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductComponent} from "./new-product/new-product.component";

const routes: Routes = [
  {path:'about' , component: AboutComponent},
  {path:'about/:username' , component: AboutComponent},
  {path:'home' , component: MyFirstComponentComponent},
  {path:'products' , component: ProductsComponent},
  {path:'new-product', component: NewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
