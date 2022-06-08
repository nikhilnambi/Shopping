import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-sellersignup',
  templateUrl: './sellersignup.component.html',
  styleUrls: ['./sellersignup.component.css']
})
export class SellersignupComponent implements OnInit {

  seller={
    name:"",
    email:"",
    phone:"",
    password:"",
  }
  AddSeller(){
    this.userdataservice_.sellerData(this.seller);
    alert("Success");
    this.router.navigate(['/login']);
  }
  constructor(private userdataservice_ : UserdataService,private router:Router) { }

  ngOnInit(): void {
  }

}
