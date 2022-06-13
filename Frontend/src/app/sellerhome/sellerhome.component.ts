import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './sellerproductsModel';



@Component({
  selector: 'app-sellerhome',
  templateUrl: './sellerhome.component.html',
  styleUrls: ['./sellerhome.component.css']
})




export class SellerhomeComponent implements OnInit {
 

 
//  products = ProductModel[]

  // products:ProductModel[] = [];
  
  products=[{
    
    productname:'',
    category:'',
    date:'',
    description:'',
    price:'',
    quantity:'',
    sellerid:this.getsellerId(),
    rating:'',
    image:''
  }]

   

    
   getsellerId(){
    return sessionStorage.getItem('id');
   }

   title:String = "Product List";

  //image properties 
  imageWidth: number =50;
  imageMargin:number =2;

  showImage:boolean = false;

 
  
 


  
  toggleImage():void{
    this.showImage = !this.showImage;
  }

  //creating getProducts() and loading the products to products array
  constructor(private productservice:ProductdataService,private router:Router,private http:HttpClient,
            private userdataservice_ : UserdataService) { }

   
   
  
   errormessage: null | undefined;
  
  

  ngOnInit(): void {


    this.productservice.getsellerProducts(this.getsellerId()).subscribe((res)=>{
      this.products =JSON.parse(JSON.stringify(res));
    },(err)=>{
      this.errormessage=err.error.message;
    })
  }

  deleteProduct(product:any){
    this.productservice.deleteProduct(product._id)
    .subscribe((data:any)=>{
      this.products = this.products.filter(products=> products!==product)
    })
  }
   
  editProduct(product:any){
    localStorage.setItem("productId",product._id.toString())
    this.router.navigate(['update']);
  }



}





