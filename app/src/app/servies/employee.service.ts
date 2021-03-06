import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }


  //get api call for employee
 getEmployees(){
   return this.http.get("http://localhost:5000/employees");
 }
}
