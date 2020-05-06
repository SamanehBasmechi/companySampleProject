import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SharedModule } from '../shared/shared.module';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [CompanyComponent, CreateCompanyComponent, CompaniesListComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ]
})
export class CompanyModule { }
