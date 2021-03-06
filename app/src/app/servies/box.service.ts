import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  constructor(private http : HttpClient) { }

  //get api call for box
  getBoxes(){
    return this.http.get("http://localhost:5000/boxes");
  }
  
}
