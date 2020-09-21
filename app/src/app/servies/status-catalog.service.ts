import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusCatalogService {

  constructor(private http : HttpClient) { }
//get api call for status catalog
  getStatusCatalogs(){
    return this.http.get("http://localhost:5000/status_catalog")
  }
}
