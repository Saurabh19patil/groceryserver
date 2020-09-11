import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './servies/item.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ItemsComponent } from './admin/items/items.component';
import { UnitComponent } from './admin/unit/unit.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { UnitService } from './servies/unit.service';
import { BoxService } from './servies/box.service';
import { CityService } from './servies/city.service';
import { CustomerService } from './servies/customer.service';
import { DeliveryService } from './servies/delivery.service';
import { EmployeeService } from './servies/employee.service';
import { ItemInBoxService } from './servies/item-in-box.service';
import { NotesService } from './servies/notes.service';
import { OrderItemService } from './servies/order-item.service';
import { OrderStatusService } from './servies/order-status.service';
import { PlaceOrderService } from './servies/place-order.service';
import { StatusCatalogService } from './servies/status-catalog.service';
import { BoxComponent } from './box/box.component';
import { CityComponent } from './city/city.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { EmployeeComponent } from './employee/employee.component';
import { ItemInBoxComponent } from './item-in-box/item-in-box.component';
import { NotesComponent } from './notes/notes.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    routingComponents,
    ItemsComponent,
    UnitComponent,
    CustomerComponent,
    BoxComponent,
    CityComponent,
    DeliveryComponent,
    EmployeeComponent,
    ItemInBoxComponent,
    NotesComponent,
    OrderItemComponent,
    OrderStatusComponent,
    PlaceOrderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    ItemService,
    UnitService,
    BoxService,
    CityService,
    CustomerService,
    DeliveryService,
    EmployeeService,
    ItemInBoxService,
    NotesService,
    OrderItemService,
    OrderStatusService,
    PlaceOrderService,
    StatusCatalogService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
