import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
	providedIn: "root"
})
export class UnitService {
	constructor(private http: HttpClient) {}

	// get api or method call
	getUnits() {
		return this.http.get("http://localhost:5000/myunits/units");
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
