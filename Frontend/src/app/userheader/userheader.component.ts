import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{UserdataService} from '../userdata.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  constructor(public _auth:UserdataService,private router:Router) { }

  ngOnInit(): void {
  }

  logoutUser(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this.router.navigate(['']);
  }

  getName(){

   return sessionStorage.getItem('username');

  }

  

  

  

  
}