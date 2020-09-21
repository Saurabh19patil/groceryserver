import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from "./app/servies/customer.service";
@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private _customerService: CustomerService ){}
  //when click on the dashboard then this canActivate is exicute
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //here isAdminRights function call from the customer.service.ts first time here return false when login is confirm or valid email and when click on dashboard that time canactivate is execute that time its return true nd dash board is open . 
    if(this._customerService.isAdminRights()){
      return true;
    }else{
      return false;
    }
  }
  
}
