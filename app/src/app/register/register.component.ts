import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { CustomerService } from "../servies/customer.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customers: any;
  display = "none";
	isDelete = "none";
user :any;

	
	loginForm = new FormGroup({
		contact_email : new FormControl(""),
		password : new FormControl("")

	});
  
  customerForm = new FormGroup({
		first_name: new FormControl(""),
		last_name: new FormControl(""),
		user_name: new FormControl(""),
		contact_email: new FormControl(""),
		password: new FormControl(""),
		contact_phone: new FormControl("")
	});
 
	

  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
    let resp5 = this._customerService.getCustomers();
		resp5.subscribe(data => {
			this.customers = data;
			console.log(this.customers);
		});
  }

  onSubmit(customerForm) {
		console.log(customerForm.value);
		this._customerService.createCustomer(customerForm);
		// modal display unvisible
		this.display = "none";
	}

	loginSubmit(loginForm) {
		// console.log(loginForm.value);
		this._customerService.loginCustomer(loginForm);
		// let resp = this._customerService.loginCustomer(loginForm);
		// console.log("dfsf",resp)
		// resp.subscribe(data => {
		// 	this.user = data;
		// });
		// if(this.user.response!=[]){
		// 	this._customerService.loggedIn= true;
		// }
		// modal display unvisible
		this.display = "none";
	}
	


  openModal() {
    this.display = "block";
  }

  onCloseHandled(flag) {
		if (flag == "addItem") {
			this.display = "none";
		} else {
			this.isDelete = "none";
		}
	}



}
