import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-sellerlogin',
  templateUrl: './sellerlogin.component.html',
  styleUrls: ['./sellerlogin.component.css']
})
export class SellerloginComponent implements OnInit {

  sellerModel={
    email:"",
    password:""
  }

  errormessage: null | undefined;

  loginSeller(){
    this.userdataservice_.loginSeller(this.sellerModel)
    .subscribe(
      res=>{
        
        localStorage.setItem('token',res.token);
        sessionStorage.setItem('sellername',res.seller.sellername);
        sessionStorage.setItem('id',res.seller.id);

        this.router.navigate(['/sellerhome']);
      },(err)=>{
       
        this.errormessage=err.error.message;
      }
    )

  }
  
  constructor(private userdataservice_ : UserdataService,private router:Router) { }

  ngOnInit(): void {
  }

}
