import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-seller-p-product',
  templateUrl: './seller-p-product.component.html',
  styleUrls: ['./seller-p-product.component.css']
})
export class SellerPProductComponent implements OnInit {

  productData={
    productname:"",
    category:"",
    date:"",
    description:"",
    price:"",
    quantity:"",
    sellerid:this.getId(),
    rating:"",
    image:""

  }
  
  getId(){
    return sessionStorage.getItem('id');
  }


  constructor(private productservice:ProductdataService,private router:Router) { }

  ngOnInit(): void {
  
    let ProductId = localStorage.getItem("productId");
    this.productservice.getsellerProduct(ProductId).subscribe((data)=>{
     this.productData=JSON.parse(JSON.stringify(data))
    })


  }

  updateProduct(){
      this.productservice.updateProduct(this.productData);
      this.router.navigate(['sellerhome']);
  }

}
