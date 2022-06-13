import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserdataService } from './userdata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth:UserdataService,private _router:Router) { }
  canActivate():boolean{

    if(this._auth.loggedIn()){
      return true;
    }

    
    else{
          this._router.navigate(['/sign-in']);
          return false;
    }
  }
   
}
  

