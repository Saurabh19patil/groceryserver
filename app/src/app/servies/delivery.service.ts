import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http : HttpClient) { }
 
  //get api call for delivery
  getDeliveries(){
    return this.http.get("http://localhost:5000/deliveries");
  }


}
