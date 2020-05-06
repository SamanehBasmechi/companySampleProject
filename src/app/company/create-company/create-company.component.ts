import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
        type: new FormControl('محصولات غدایی', Validators.required)
      })

  }

  ngOnInit(): void {
  }

  addCompany() {
    if(this.companyForm.valid){
      this.companyForm.patchValue({
        phone:['+98',this.companyForm.controls['phone'].value].join('')
      })
      this.companyservice.addCompany(this.companyForm.value).subscribe(
        resp => {
          this.getCompaniesAgain.emit();
          this.companyForm.reset();
        }
      )
    }
    else{
      alert('لطفا تمام فیلدها را پرکنید.');
    }
    
  }

}
