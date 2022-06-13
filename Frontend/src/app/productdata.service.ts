import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor(private http:HttpClient) { }

  productData(item:any){
    return this.http.post("http://localhost:2000/add-product",{"productdata":item})
    .subscribe(data=>{console.log(data)})
  }

  getsellerProducts(sellerid:any){
    
    return this.http.get("http://localhost:2000/get-seller-products/"+sellerid)
    
  }

  getsellerProduct(_id:any){
    return this.http.get("http://localhost:2000/get-seller-product/"+_id)
  }

  deleteProduct(_id:any){
    return this.http.get("http://localhost:2000/deleteProduct/"+_id)
  }

  updateProduct(item:any){
    return this.http.put("http://localhost:2000/updateProduct",item)
    .subscribe(data=>{
      console.log(data);
    })
  }

  //user functions

  //products to user page

  getuserProduct(){
    return this.http.get("http://localhost:2000/get-user-product")
  }

  getcartProduct(_id:any){
     return this.http.get("http://localhost:2000/get-cart-product/"+_id)
  }

  addToCart(cartData:any){
    return this.http.post("http://localhost:2000/add-to-cart",{"cartdata":cartData})
    .subscribe(data=>{console.log(data)})
  }
   
  getCarts(userid:any){
  
    return this.http.get("http://localhost:2000/cartproducts/"+userid);

  }

  deletecartproduct(_id:any){
    return this.http.get("http://localhost:2000/deletecartproduct/"+_id)
  }

}
