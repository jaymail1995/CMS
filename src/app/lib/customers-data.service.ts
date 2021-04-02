import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICustomer } from './customer.interface';

@Injectable()
export class CustomerDataService {

  pkLastIndex: number = 3;

  customersList= [
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
      customer.id = ++this.pkLastIndex;
      //customer.balance = parseFloat(customer.balance);
      this.customersList.push(customer);
    }

    edit(customer: ICustomer){
      
      const editIndex = this.findItemIndex(customer);

      this.customersList[editIndex].name = customer.name;
      this.customersList[editIndex].email = customer.email;
      this.customersList[editIndex].phoneNumber = customer.phoneNumber;
      this.customersList[editIndex].balance = customer.balance;
    }

    delete(customer:ICustomer): void{
      const removeIndex = this.findItemIndex(customer);
      if(removeIndex >= 0){
        this.customersList.splice(removeIndex, 1);
      }
    }

    findItemIndex(customer: ICustomer){
      return this.customersList.findIndex( x => x.id === customer.id);
    }
}