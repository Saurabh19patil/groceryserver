import { Component } from "@angular/core";
import { ItemService } from "./servies/item.service";
import { HttpClient } from "@angular/common/http";
import { UnitService } from "./servies/unit.service";
import { BoxService } from "./servies/box.service";
import { CityService } from "./servies/city.service";
import { CustomerService } from "./servies/customer.service";
import { DeliveryService } from "./servies/delivery.service";
import { EmployeeService } from "./servies/employee.service";
import { ItemInBoxService } from "./servies/item-in-box.service";
import { NotesService } from "./servies/notes.service";
import { OrderItemService } from "./servies/order-item.service";
import { OrderStatusService } from "./servies/order-status.service";
import { PlaceOrderService } from "./servies/place-order.service";
import { StatusCatalogService } from "./servies/status-catalog.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	title = "app";
	items: any;
	units: any;
	boxes: any;
	cities: any;
	customers: any;
	deliveries: any;
	employees: any;
	iteminboxes: any;
	notes: any;
	orderitems: any;
	orderstatuses: any;
	placeorders: any;
	statuscatalogs: any;

	constructor(
		private _itemService: ItemService,
		private _unitService: UnitService,
		private _boxService: BoxService,
		private _cityService: CityService,
		private _customerService: CustomerService,
		private _deliveryService: DeliveryService,
		private _employeeService: EmployeeService,
		private _iteminboxService: ItemInBoxService,
		private _notesService: NotesService,
		private _orderitemService: OrderItemService,
		private _orderstatusService: OrderStatusService,
		private _placeOrderService: PlaceOrderService,
		private _statusCatalogService: StatusCatalogService
	) {}

	ngOnInit() {
		let resp = this._itemService.getItems();
		resp.subscribe(data => {
			this.items = data;
			console.log(this.items);
		});

		let resp2 = this._unitService.getUnits();
		resp2.subscribe(data => {
			this.units = data;
			console.log(this.units);
		});

		let resp3 = this._boxService.getBoxes();
		resp3.subscribe(data => {
			this.boxes = data;
			console.log(this.boxes);
		});

		let resp4 = this._cityService.getCities();
		resp4.subscribe(data => {
			this.cities = data;
			console.log(this.cities);
		});

		let resp5 = this._customerService.getCustomers();
		resp5.subscribe(data => {
			this.customers = data;
			console.log(this.customers);
		});

		let resp6 = this._deliveryService.getDeliveries();
		resp6.subscribe(data => {
			this.deliveries = data;
			console.log(this.deliveries);
		});

		let resp7 = this._employeeService.getEmployees();
		resp7.subscribe(data => {
			this.employees = data;
			console.log(this.employees);
		});

		let resp8 = this._iteminboxService.getItemInBoxes();
		resp8.subscribe(data => {
			this.iteminboxes = data;
			console.log(this.iteminboxes);
		});

		let resp9 = this._notesService.getNotes();
		resp9.subscribe(data => {
			this.notes = data;
			console.log(this.notes);
		});

		let resp10 = this._orderitemService.getOrderItems();
		resp10.subscribe(data => {
			this.orderitems = data;
			console.log(this.orderitems);
		});

		let resp11 = this._orderstatusService.getOrderStatus();
		resp11.subscribe(data => {
			this.orderstatuses = data;
			console.log(this.orderstatuses);
		});

		let resp12 = this._placeOrderService.getPlaceOrders();
		resp12.subscribe(data => {
			this.placeorders = data;
			console.log(this.placeorders);
		});

		let resp13 = this._statusCatalogService.getStatusCatalogs();
		resp13.subscribe(data => {
			this.statuscatalogs = data;
			console.log(this.statuscatalogs);
		});
	}
}
