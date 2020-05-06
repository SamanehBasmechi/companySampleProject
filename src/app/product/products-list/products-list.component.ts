import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() products;
  @Input() company_name;
  @Input() loading;

  constructor() { }

  ngOnInit(): void {
  }

}
