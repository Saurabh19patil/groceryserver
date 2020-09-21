import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class CustomerService {
	constructor(private http: HttpClient) {}

	//this is use for dashbord when click on dashboard then dashboard is doesn't open.
	loggedIn = false;

	//gets here all customers table details or calling get method.
	getCustomers() {
		return this.http.get("http://localhost:5000/mycustomers/customers");
	}

	//this is use for delete perticular customer from customer table. this is calling delete method
	deleteCustomer = function(id) {
		console.log("inside service", id);
		this.http
			.delete("http://localhost:5000/mycustomers/customers/" + id)
			.subscribe(data => {
				console.log(data);
			});
	};

	// this is post method calling.
	createCustomer = function(customerForm) {
		console.log("inside service", customerForm);
		this.http
			.post("http://localhost:5000/mycustomers/customers/", customerForm.value)
			.subscribe(data => {
				console.log(data);
			});
	};

	// loginCustomer = function (loginForm) {
	//   console.log("inside service", loginForm);

	//  this.http.post("http://localhost:5000/mycustomers/login/",loginForm.value).subscribe(data=>
	//   console.log(data)
	//   );

	//here login post call from customer.js
	loginCustomer = function(loginForm) {
		console.log("inside service", loginForm);
		let info;
		this.http
			.post("http://localhost:5000/mycustomers/login/", loginForm.value)
			.subscribe(data => {
				info = data;
				//here info is and response lenght is print in console
				console.log("agsfash", info, info.response.length);
				if (info.response.length != 0) {
					this.loggedIn = true;
				} else this.loggedIn = false;
			});
	};

	// this function is call im activate.guard.ts
	isAdminRights(): boolean {
		return this.loggedIn;
	}
}
