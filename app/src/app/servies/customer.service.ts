import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  loggedIn = false;

  getCustomers() {
    return this.http.get("http://localhost:5000/mycustomers/customers");
  }

  deleteCustomer = function (id) {
    console.log("inside service", id);
    this.http.delete("http://localhost:5000/mycustomers/customers/" + id).subscribe(data => {
      console.log(data);


    });
  }

  createCustomer = function (customerForm) {
    console.log("inside service", customerForm);
    this.http.post("http://localhost:5000/mycustomers/customers/", customerForm.value).subscribe(data => {
      console.log(data);

    });
  }

  // loginCustomer = function (loginForm) {
  //   console.log("inside service", loginForm);

  //  this.http.post("http://localhost:5000/mycustomers/login/",loginForm.value).subscribe(data=>
  //   console.log(data)
  //   );
  loginCustomer = function (loginForm) {
    console.log("inside service", loginForm);
    let info;
     this.http.post("http://localhost:5000/mycustomers/login/", loginForm.value).subscribe(data => { 
      info = data ;
      console.log("agsfash", info, info.response.length)
      if (info.response.length !=0){
        this.loggedIn = true;
      }
      else this.loggedIn = false;
    })
    

  }

  isAdminRights(): boolean {
    return this.loggedIn;
  }

}
