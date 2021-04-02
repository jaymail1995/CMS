import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerDataService } from '../lib/customers-data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ICustomer } from '../lib/customer.interface';

@Component({
  selector: 'cms-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  customerForm: FormGroup;

  get name() { return this.customerForm.get('name'); }
  get phoneNumber() { return this.customerForm.get('phoneNumber'); }
  get email() { return this.customerForm.get('email'); }
  get balance() { return this.customerForm.get('balance'); }

  constructor(private dataService: CustomerDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      balance: new FormControl('')
    });
  }

  onSubmit(customerInfo){
    
    this.dataService.add(customerInfo);

    Swal.fire({
      title: 'Success!',
      text: 'New customer has been added',
      icon: 'success',
      confirmButtonText: 'Done'
    });

    this.router.navigate([ '/', 'customers']);
  }
}