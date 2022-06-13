import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

  //user signup

  userData(item:any){
    return this.http.post("http://localhost:2000/insert",{"userdata":item})
    .subscribe(data=>{console.log(data)})
  }


    //seller signup

    sellerData(item:any){
      return this.http.post("http://localhost:2000/add",{"sellerdata":item})
      .subscribe(data=>{console.log(data)})
    }


  //user-login

  _url = 'http://localhost:2000/login';
  
  loginUser(user:any){
     return this.http.post<any>(this._url,user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  
  }

  getData(){
    return sessionStorage.getItem('user');
  }

  //seller-login

 
  
  loginSeller(seller:any){
     return this.http.post<any>('http://localhost:2000/sellerlogin',seller)
  }


}