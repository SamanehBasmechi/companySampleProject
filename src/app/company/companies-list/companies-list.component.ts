import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

  @Input() companies = [];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onProduct(id) {
    this.router.navigate(['/products', id])
  }

}
