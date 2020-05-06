import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ProductComponent } from '../product.component';
import { ProductService } from '../product.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  @ViewChild(ProductComponent) ProductComponent: ProductComponent;
  @Output('getProductsAgain') getProductsAgain = new EventEmitter();
  @Input() company_id;
  productForm: FormGroup;
  config = {
    drops: 'down',
    format: 'YY/M/D'
  }


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      status: new FormControl('active', Validators.required),
      company_id: new FormControl('', Validators.required),
    })
  }

  addProduct() {
    if (this.productForm.valid) {
      this.productForm.controls['company_id'].setValue(this.company_id);
      this.productService.addProduct(this.productForm.value).subscribe(
        resp => {
          this.getProductsAgain.emit();
        }
      )
    }
    else {
      alert('لطفا تمام فیلد ها را پرکنید.')
    }
  }

}
