import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {

  constructor(private http : HttpClient) { }

  //get api call for order status
  getOrderStatus(){
    return this.http.get("http://localhost:5000/order_status");
  }
}
