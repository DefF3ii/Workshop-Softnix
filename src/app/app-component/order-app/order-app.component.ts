import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderService } from '../order.service';
import { Observable, Subscription } from 'rxjs';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-order-app',
  templateUrl: './order-app.component.html',
  styleUrls: ['./order-app.component.css']
})
  
export class OrderAppComponent implements OnInit {

  orders: any;
  // private apiUrl = 'http://demo.softnix.co.th:8010/orders';


  constructor(private orderService: OrderService,
    private http: HttpClient
  ) { 
    this.getOrders();
    // this.getOrder();
  }

  ngOnInit(): void {
    
  }

  
  getOrders(): void {
    this.orderService.getOrder().subscribe({
      next: (response: AxiosResponse<any>) => {
        console.log('Orders data:', response.data);
        this.orders = response.data;
      },
      error: (error) => {
        console.error('Error fetching orders:', error);
      }
    });
  }

  // async getOrder() {
  //   try {
  //     const response = await axios.get(
  //       'http://demo.softnix.co.th:8010/orders'
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  // ngOnInit(): void {
  //   this.orderService.getOrders().subscribe({
  //     next: (data ) => {
  //       console.log("Order : ",data)
  //       return (this.posts = data)},
  //     error: (error) => console.error('Error:', error),
  //   });
  // }


  // getOrders(): void {
  //   this.http.get(this.apiUrl).subscribe({
  //     next: (response) => {
  //       console.log('Orders data:', response);
  //       // this.orders = response;
  //       // this.checkOrderData();
  //     },
  //     error: (error) => {
  //       console.error('Error fetching orders:', error);
  //     }
  //   });
  // }
  

}
