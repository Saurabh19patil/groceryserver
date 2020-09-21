import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemInBoxService {

  constructor(private http : HttpClient) { }

  //get api call for item in box
   getItemInBoxes(){
     return this.http.get("http://localhost:5000/item_in_boxes");
   }
  
}
