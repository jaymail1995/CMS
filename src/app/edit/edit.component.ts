import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerDataService } from '../lib/customers-data.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ICustomer } from '../lib/customer.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  customer: ICustomer;
  customerForm: FormGroup;

  get id() { return this.customerForm.get('id'); }
  get name() { return this.customerForm.get('name'); }
  get phoneNumber() { return this.customerForm.get('phoneNumber'); }
  get email() { return this.customerForm.get('email'); }
  get balance() { return this.customerForm.get('balance'); }

  constructor(private dataService: CustomerDataService,
              private router: Router,
              private route: ActivatedRoute) { }

    ngOnInit(): void {

      let id = +this.route.snapshot.paramMap.get('id');
      this.customer = this.dataService.getCustomerById(id);

      this.customerForm = new FormGroup({
        id: new FormControl( this.customer.id ),
        name: new FormControl( this.customer.name, Validators.required),
        phoneNumber: new FormControl( this.customer.phoneNumber),
        email: new FormControl( this.customer.email ),
        balance: new FormControl( this.customer.balance )
      });
    }
  
    onSubmit(customerInfo){
        
      this.dataService.edit(customerInfo);
  
      Swal.fire({
        title: 'Success!',
        text: 'Changes has been saved',
        icon: 'success',
        confirmButtonText: 'Done'
      });
  
      this.router.navigate([ '/', 'customers']);
    }

}
