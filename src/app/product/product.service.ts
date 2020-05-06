import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient ) { }
  
  getProducts(company_id){
    return this.httpClient.get(`http://localhost:3000/products?company_id=${company_id}`);
  }

  addProduct(model){
    return this.httpClient.post('http://localhost:3000/products' , model);
  }

}
