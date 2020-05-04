import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product.component';


@NgModule({
  declarations: [CreateProductComponent, ProductsListComponent,ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
