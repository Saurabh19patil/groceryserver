import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ItemsComponent } from './admin/items/items.component';
import { UnitComponent } from './admin/unit/unit.component';
import { CustomerComponent } from './admin/customer/customer.component'


const routes: Routes = [
  {
    path:"dashboard",component: DashboardComponent,
  children:[
   
    {path:"items",component: ItemsComponent},
    {path:"units",component: UnitComponent},
    {path:"customers",component: CustomerComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent]