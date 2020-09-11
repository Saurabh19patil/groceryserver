import { Component, OnInit, ɵConsole } from "@angular/core";
import { CustomerService } from "../../servies/customer.service";
import { FormControl, FormGroup } from "@angular/forms";
import { timer } from "rxjs";

@Component({
	selector: "app-customer",
	templateUrl: "./customer.component.html",
	styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
	customers: any;

	display = "none";

	// customerForm = new FormGroup({
	//       Id: new FormControl(''),
	//       first_name: new FormControl(''),
	//       last_name : new FormControl(''),
	//       user_name : new FormControl(''),
	//       password : new FormControl(''),
	//       time_inserted : new FormControl(''),
	//       confirmation_code : new FormControl(''),
	//       time_confirmed : new FormControl(''),
	//       contact_email : new FormControl(''),
	//       contact_phone : new FormControl(''),
	//       city_id : new FormControl(''),
	//       address : new FormControl(''),
	//       delivery_city_id : new FormControl(''),
	//       delivery_address : new FormControl('')

	//  });

	constructor(private _customerService: CustomerService) {}

	ngOnInit(): void {
		let resp5 = this._customerService.getCustomers();
		resp5.subscribe(data => {
			this.customers = data;
			console.log(this.customers);
		});
	}

	deleteCustomer = function(id: number): void {
		console.log("inside", id);
		this._customerService.deleteCustomer(id);
	};

	// onSubmit(customerForm){
	//   console.log(customerForm.value);
	//   this._customerService.createCustomer(customerForm)

	// }

	// openModal(){
	//   this.display='block';
	// }
	// onCloseHandled(){
	//   this.display='none';
	// }
}
