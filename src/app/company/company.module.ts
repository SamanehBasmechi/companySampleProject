import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { HttpClientModule, HttpClient } from "@angular/common/http";



@NgModule({
  declarations: [CompanyComponent, CreateCompanyComponent, CompaniesListComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
