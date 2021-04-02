import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CustomerDataService } from './customers-data.service';

@NgModule({
    imports: [ HttpClientModule ],
    providers: [ CustomerDataService ]
})
export class LibModule { }