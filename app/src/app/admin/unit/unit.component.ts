import { Component, OnInit, ɵConsole } from "@angular/core";
import { UnitService } from "../../servies/unit.service";
import { FormControl, FormGroup } from "@angular/forms";
import { NONE_TYPE } from "@angular/compiler";
@Component({
	selector: "app-unit",
	templateUrl: "./unit.component.html",
	styleUrls: ["./unit.component.css"]
})
export class UnitComponent implements OnInit {
	units: any;

	showModal = false;
	isDelete = "none";
	display = "none";

	unitForm = new FormGroup({
		Id: new FormControl(""),
		Unit_Name: new FormControl(""),
		Short_Name: new FormControl("")
	});

	constructor(private _unitService: UnitService) {}

	ngOnInit(): void {
		let resp2 = this._unitService.getUnits();
		resp2.subscribe(data => {
			this.units = data;
			console.log(this.units);
		});
	}

	//  deleteUnit= function (id : number ) : void {
	//   console.log("inside ", id);
	//   this._unitService.deleteUnit(id)
	// }

	// after confirmation deleting when press yes then UNIT is delete
	deleteUnit = function(): void {
		this._unitService.deleteUnit(this.deleteId);
		this.isDelete = "none";
	};

	// form submit function
	onSubmit(unitForm) {
		console.log(unitForm.value);
		this._unitService.createUnit(unitForm);
		// modal display unvisible
		this.showModal = false;
	}

	// delete button
	confirmdeletion = function(id: number): void {
		this.deleteId = id;
		// when click on delete button then modal is visible
		this.isDelete = "block";
	};
	// modal unvisible function
	onCloseHandled(flag) {
		if (flag == "addItem") {
			this.display = "none";
		} else {
			this.isDelete = "none";
		}
	}
}
