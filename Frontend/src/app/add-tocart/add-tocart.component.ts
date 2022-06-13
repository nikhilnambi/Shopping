import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-add-tocart',
  templateUrl: './add-tocart.component.html',
  styleUrls: ['./add-tocart.component.css']
})
export class AddTocartComponent implements OnInit {
   
  

  products={

    productname:"",
    category:"",
    date:"",
    description:"",
    price:"",
    quantity:"",
    sellerid:"",
    rating:"",
    image:""
  
  }
   
  

  cartData={

    productname:this.getproductname(),
    category:this.getcategory(),
    date:this.getdate(),
    description:this.getdescription(),
    quantity:this.getquantity(),
    price:this.getprice(),
    rating:this.getrating(),
    cartquantity:"",
    sellerid:this.getsellerid(),
    image:this.getimage(),
    userid:this.getuserid()

  }

  
  

 
  
  getuserid(){
    return sessionStorage.getItem("id");
  }
  getproductname(){
    return sessionStorage.getItem("productname");
  }
  getcategory(){
    return sessionStorage.getItem("category");
  }
  getdate(){
    return sessionStorage.getItem("date");
  }
  getdescription(){
    return sessionStorage.getItem("description");
  }
  getquantity(){
    return sessionStorage.getItem("quantity");
  }
  getprice(){
    return sessionStorage.getItem("price");
  }
  getrating(){
    return sessionStorage.getItem("rating");
  }
  getsellerid(){
    return sessionStorage.getItem("sellerid");
  }
  
  getimage(){
    return sessionStorage.getItem("image");
  }


  
  
  

  
 
  


  constructor(private productservice:ProductdataService,private router:Router
              ) { 
               
              }

  ngOnInit(): void {
    
    

    let option:Array<number>;
    option=[1,2,3,4,5,6,7,8,9,10];


    let ProductId = sessionStorage.getItem('productid');
    this.productservice.getcartProduct(ProductId).subscribe((data)=>{
      
      this.products =JSON.parse(JSON.stringify(data))
      // sessionStorage.setItem("productid",product._id.toString());
      sessionStorage.setItem("productname",this.products.productname);
      sessionStorage.setItem("category",this.products.category);
      sessionStorage.setItem("date",this.products.date);
      sessionStorage.setItem("description",this.products.description);
      sessionStorage.setItem("quantity",this.products.quantity);
      sessionStorage.setItem("price",this.products.price);
      sessionStorage.setItem("rating",this.products.rating);
      sessionStorage.setItem("image",this.products.image);
      sessionStorage.setItem("sellerid",this.products.sellerid);


      
  })

}

 
  
  toDisplay = true;
  

  addToCart(){
    this.toDisplay = !this.toDisplay;
  
  }
 

  cartProduct(){
    this.productservice.addToCart(this.cartData);
    alert("Success");
  
  }
  goTocart(){
     this.router.navigate(['/cart']);
  }

}


