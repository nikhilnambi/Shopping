import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {UserdataService} from './userdata.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  
  intercept(req:any,nxt:any){

    let userdataService = this.injector.get(UserdataService);

    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${userdataService.getToken()}`
  }
  

})


    return nxt.handle(tokenizedReq);
    
  }

}
