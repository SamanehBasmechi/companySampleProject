import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products;
  company_id;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(
      resp => {
        this.company_id = resp.company_id;
        this.getProducts();
      }
    )
  }

  getProducts() {
    this.productService.getProducts(this.company_id).subscribe(
      products => {
        this.products = products;
      }
    )

  }

}
