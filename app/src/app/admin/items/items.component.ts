import { Component, OnInit, ɵConsole } from "@angular/core";
import { ItemService } from "../../servies/item.service";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
	selector: "app-items",
	templateUrl: "./items.component.html",
	styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
	items: any;

	display = "none";
	isDelete = "none";
	deleteId = "none";

	itemForm = new FormGroup({
		Id: new FormControl(""),
		item_name: new FormControl(""),
		price: new FormControl(""),
		item_photo: new FormControl(""),
		description: new FormControl(""),
		unit_id: new FormControl("")
	});

	constructor(private _itemService: ItemService) {}

	ngOnInit(): void {
		let resp = this._itemService.getItems();
		resp.subscribe(data => {
			this.items = data;
			console.log(this.items);
		});
	}

	// after confirmation deleting when press yes then item is delete
	deleteItem = function(): void {
		this._itemService.deleteItem(this.deleteId);
		this.isDelete = "none";
	};

	// form submit function
	onSubmit(itemForm) {
		console.log(itemForm.value);
		this._itemService.createItem(itemForm);
		// modal display unvisible
		this.display = "none";
	}

	// delete button
	confirmdeletion = function(id: number): void {
		this.deleteId = id;
		// when click on delete button then modal is visible
		this.isDelete = "block";
	};

	// when click on new create item button then modal is visible
	openModal() {
		this.display = "block";
	}

	// modal unvisible function
	onCloseHandled(flag) {
		if (flag == "addItem") {
			this.display = "none";
		} else {
			this.isDelete = "none";
		}
	}
}

// products : any;
// products = [
//   {
//     "Id": 40,
//   "description" : "",
//   "item_name ": "Tomato",
//   "item_photo": "https://i2.wp.com/freshmarket.co.in/wp-content/uploads/2019/10/Tomatoes-500x500.jpg?resize=500%2C500&ssl=1",
//   "price": 50,
//   "unit_id": 1
//   }
//     ]

// showItemModal = false;

// showModal = false;
// itemForm = new FormGroup({
//  Id : new FormControl(''),
//  item_name : new FormControl(''),
//  price : new FormControl(''),
//  item_photo : new FormControl(''),
//  description : new FormControl(''),
//  unit_id : new FormControl('')
// });
