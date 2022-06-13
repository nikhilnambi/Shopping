import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-userproduct',
  templateUrl: './userproduct.component.html',
  styleUrls: ['./userproduct.component.css']
})
export class UserproductComponent implements OnInit {
   
  products=[{
    productname:"",
    category:"",
    date:"",
    description:"",
    price:"",
    quantity:"",
    sellerid:"",
    rating:"",
    image:""

  }]
  


  constructor(private productservice:ProductdataService,private router:Router) { }
  
  ngOnInit(): void {
   
    this.productservice.getuserProduct().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data))
      
  })
  }
  
  toDisplay = true;
  

  addToCart(){
    this.toDisplay = !this.toDisplay;
  }
  goTocart(){
      
  }
  
  view(product:any){
    sessionStorage.setItem("productid",product._id.toString());
    this.router.navigate(['view-product'])
  }


}
