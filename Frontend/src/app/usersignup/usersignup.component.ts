import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserdataService } from '../userdata.service';

// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  register={
    name:"",
    email:"",
    phone:"",
    password:""
  }
  
  constructor(private userdataservice_ : UserdataService,private router:Router) { }

  ngOnInit(): void {
  }
 
  AddUser(){
    this.userdataservice_.userData(this.register);
    alert("Success");
    this.router.navigate(['/sign-in']);
  
  }

}
