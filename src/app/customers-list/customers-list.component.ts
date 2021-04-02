import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../lib/customer.interface'
import { CustomerDataService } from '../lib/customers-data.service';

@Component({
  selector: 'cms-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customersList: ICustomer[];

  constructor(private dataService: CustomerDataService) {

  }

  ngOnInit(): void {
    this.customersList = this.dataService.getCustomers();
    //console.log(this.customersList);
  }

}