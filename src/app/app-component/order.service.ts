import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';
import { Orders } from './order';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    private url: string = environment.apiUrl;

    constructor(private http: HttpClient) { }
    
    private apiUrl = 'http://demo.softnix.co.th:8010/orders';

    // getOrders(): Observable<Order[]> {
    //     return this.http.get<Order[]>(this.apiUrl)
    //   }


  //   getOrders(): Observable<Array<any>> {
  //       return this.http.get<[]>(this.url).pipe(
  //         catchError(this.handleError)
  //       );
  //   }
    
  //   private handleError(error: HttpErrorResponse) {
  //       console.error('API error:', error);
  //       return throwError(() => new Error('An error occurred while fetching data.'));
  // }
  
  getOrder(): Observable<AxiosResponse<any>> {
    // ใช้ from() เพื่อแปลง axios Promise ให้เป็น Observable
    return from(
      axios.get('http://demo.softnix.co.th:8010/orders', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    );
  }

    
    
}