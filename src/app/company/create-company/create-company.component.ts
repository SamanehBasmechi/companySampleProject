import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompaniesListComponent } from '../companies-list/companies-list.component';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  companyForm: FormGroup;
  @Output('getCompaniesAgain') getCompaniesAgain = new EventEmitter();

  constructor(private companyservice: CompanyService) {

    this.companyForm = new FormGroup({
        name: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required)
      })

  }

  ngOnInit(): void {
  }

  addCompany() {
    if(this.companyForm.valid){
      this.companyservice.addCompany(this.companyForm.value).subscribe(
        resp => {
          console.log(resp);
          this.getCompaniesAgain.emit();
        }
      )
    }
    else{
      alert('لطفا تمام فیلدها را پرکنید.')
    }
    
  }

}
