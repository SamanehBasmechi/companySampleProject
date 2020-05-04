import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

  companies:any;

  constructor(
    private companyService:CompanyService,
    private router:Router) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe(
      resp=>{
        console.log(resp);
        this.companies = resp;
      }
    )
  }

  onProduct(){
    this.router.navigate(['/products'])
  }

}
