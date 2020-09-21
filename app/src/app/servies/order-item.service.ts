import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(private http : HttpClient) { }

  //get api call for order item
  getOrderItems(){
    return this.http.get("http://localhost:5000/order_items");
  }
}
