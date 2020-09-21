import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class ItemService {
	constructor(private http: HttpClient) {}

	//all items are get. here get method calling.
	getItems() {
		return this.http.get("http://localhost:5000/myitems/items");
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
