import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CustomerService } from "./customer.service";

@Injectable({
	providedIn: "root"
})
export class ItemService {
	constructor(private http: HttpClient, private _customerService: CustomerService) {}

	//all items are get. here get method calling.
	getItems() {

		var header	= {
			headers: new HttpHeaders()
			//here bearer and token send 
			  .set('Authorization', 'bearer ' + this._customerService.token)
		  }
		  
		return this.http.get("http://localhost:5000/myitems/items", header);
	}
	//delete item from item table. delete method call here
	deleteItem = function(id) {
		console.log("inside service", id);
		this.http
			.delete("http://localhost:5000/myitems/items/" + id)
			.subscribe(data => {
				console.log(data);
			});
	};

	// post method call here
	createItem = function(itemForm) {
		console.log("inside service", itemForm);
		this.http
			.post("http://localhost:5000/myitems/items/", itemForm.value)
			.subscribe(data => {
				console.log(data);
			});
	};
}
