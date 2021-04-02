import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: CustomersListComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/create', component: CreateComponent },
  { path: 'customers/details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }