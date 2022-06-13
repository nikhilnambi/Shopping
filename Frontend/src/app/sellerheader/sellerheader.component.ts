import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellerheader',
  templateUrl: './sellerheader.component.html',
  styleUrls: ['./sellerheader.component.css']
})
export class SellerheaderComponent implements OnInit {

  logoutSeller(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('seller');
    this.router.navigate(['']);
  }

  getName(){

   return sessionStorage.getItem('sellername');

  }


  constructor(public _auth:UserdataService,private router:Router) { }

  ngOnInit(): void {
  }

}
