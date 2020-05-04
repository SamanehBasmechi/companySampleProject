import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompanyComponent, CreateCompanyComponent, CompaniesListComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
