import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products :any = [];
  company : {id:'' , name:''};
  loading = true;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(
      resp => {
        this.company = {id:resp.company_id , name:resp.company_name};
        this.getProducts();
      }
    )
  }

  getProducts() {
    this.loading = true;
    this.productService.getProducts(this.company.id).subscribe(
      products => {
        this.products = products;
        this.loading = false;
        console.log(this.products)
      }
    )

  }

}
