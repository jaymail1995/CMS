import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICustomer } from './customer.interface';

@Injectable()
export class CustomerDataService {

  pkLastIndex: number = 3;

  customersList = [
                {
                    id: 1,
                    name: "Mark Otto",
                    email: "mark@example.com",
                    phoneNumber: "879-521-5487",
                    balance: 11.99
                },
                {
                    id: 2,
                    name: "Jacob Thornton",
                    email: "jacob@example.com",
                    phoneNumber: "658-548-8745",
                    balance: 45.87
                },
                {
                    id: 3,
                    name: "Larry Johnson",
                    email: "larry@example.com",
                    phoneNumber: "254-965-7852",
                    balance: 65.51
                }
];
    
    constructor() { }

    getCustomers() : ICustomer[]{
      return this.customersList;
    }

    getCustomerById(customerId: number) : ICustomer{
      return this.customersList.find(x => x.id === customerId);
    }

    add(customer: ICustomer){
      this.customersList.push(customer);
    }

    delete(customer:ICustomer): void{
      const index = this.customersList.indexOf(customer);
      if(index >= 0){
        this.customersList.splice(index, 1);
      }
    }
}