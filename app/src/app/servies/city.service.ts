import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http : HttpClient) { }

  //get api call for city
  getCities(){
    return this.http.get("http://localhost:5000/cities");
  }
}
