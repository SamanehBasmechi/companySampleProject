import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient ) { }

  getCompanies(){
    return this.httpClient.get('http://localhost:3000/companies');
  }

  addCompany(model){
    return this.httpClient.post('http://localhost:3000/companies' , model);
  }

}
