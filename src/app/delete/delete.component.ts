import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerDataService } from '../lib/customers-data.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ICustomer } from '../lib/customer.interface';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {

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
    }
  
    onDelete(){
      console.log('ON delete');
      this.dataService.delete(this.customer);
  
      Swal.fire({
        title: 'Success!',
        text: 'Customer has been deleted',
        icon: 'success',
        confirmButtonText: 'Done'
      });
  
      this.router.navigate([ '/', 'customers']);
    }

}

