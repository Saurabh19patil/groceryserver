import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CustomerService } from "./customer.service";
@Injectable({
	providedIn: "root"
})
export class UnitService {
	constructor(private http: HttpClient, private _customerService: CustomerService) {}

	// get api or method call
	getUnits() {
		var header	= {
			headers: new HttpHeaders()
			//here bearer and token send 
			  .set('Authorization', 'bearer ' + this._customerService.token)
		  }
		return this.http.get("http://localhost:5000/myunits/units", header);
	}

	// delete api call
	deleteUnit = function(id) {
		console.log("inside service", id);
		this.http
			.delete("http://localhost:5000/myunits/units/" + id)
			.subscribe(data => {
				console.log(data);
			});
	};


//post api call
	createUnit = function(unitForm) {
		console.log("inside service", unitForm);
		this.http
			.post("http://localhost:5000/myunits/units/", unitForm.value)
			.subscribe(data => {
				console.log(data);
			});
	};
}
