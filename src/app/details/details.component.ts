import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ICustomer } from '../lib/customer.interface';
import { CustomerDataService } from '../lib/customers-data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  customer: ICustomer;

  constructor(private dataService: CustomerDataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.customer = this.dataService.getCustomerById(id);
  }

}
