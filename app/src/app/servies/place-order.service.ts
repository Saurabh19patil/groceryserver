import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  constructor(private http : HttpClient) { }

  getPlaceOrders(){
    return this.http.get("http://localhost:5000/place_order")
  }
}
