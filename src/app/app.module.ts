import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibModule } from './lib/lib.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerDataService } from './lib/customers-data.service';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    MasterLayoutComponent,
    CreateComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule,
    ReactiveFormsModule
  ],
  providers: [CustomerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
