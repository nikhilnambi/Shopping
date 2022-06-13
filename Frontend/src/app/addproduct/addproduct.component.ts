import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  

  constructor(private productservice:ProductdataService,private router:Router) { }

  ngOnInit(): void {
  }

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

  AddProduct(){
    this.productservice.productData(this.productData);
    alert("successfully added");
    this.router.navigate(['/sellerhome']);
  }

  getId(){
    return sessionStorage.getItem('id');
  }

}
