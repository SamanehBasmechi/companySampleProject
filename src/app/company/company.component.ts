import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies: any = [];
  loading = true;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.loading = true;
    this.companyService.getCompanies().subscribe(
      resp => {
        console.log(resp);
        this.companies = resp;
        this.loading = false;
      }
    )
  }

}
