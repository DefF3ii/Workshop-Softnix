import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import axios from 'axios';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAppComponent } from './app-component/navbar-app/navbar-app.component';
import { OrderAppComponent } from './app-component/order-app/order-app.component';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './app-component/customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarAppComponent,
    OrderAppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
