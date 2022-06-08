import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.css']
})
export class UsersigninComponent implements OnInit {
  
  userModel={
    email:"",
    password:""
  }
  errormessage: null | undefined;

  loginUser(){

    
    this.userdataservice_.loginUser(this.userModel)
    .subscribe(
      res=>{
        
        localStorage.setItem('token',res.token);
        this.router.navigate(['/products']);
      },(err)=>{
       
        this.errormessage=err.error.message;
      }
    )

  }
  constructor(private userdataservice_ : UserdataService,private router:Router) { }

  ngOnInit(): void {
  }


}
