import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {

  constructor(private productservice:ProductdataService,private router:Router) { }
  
  cartproducts=[{

    productname:"",
    category:"",
    date:"",
    description:"",
    quantity:"",
    price:"",
    rating:"",
    cartquantity:"",
    sellerid:"",
    image:"",
    userid:""

  }]


  getTotalprice(){
    return localStorage.getItem("totalprice")
  }

  errormessage: null | undefined;

  ngOnInit(): void {
    
    let userid = sessionStorage.getItem('id');
    this.productservice.getCarts(userid).subscribe((res)=>{
      
      this.cartproducts =JSON.parse(JSON.stringify(res))

    },(err)=>{
        this.errormessage=err.error.message;
      })


      var i;
      var j;
      
      var p=0;

        
        for(i in this.cartproducts){
         
          // p =p +this.cartproducts[i].price;

            localStorage.setItem("totalprice",this.cartproducts[i].price);
            
        }
    }

      // console.log(this.cartproducts)
        
      
     
       
        // let  sum:string:0;
        //   this.cartproducts.forEach(a=>sum += a.price);
        //   console.log(sum);
        //  })
        
        
        deletecartproduct(product:any){
          this.productservice.deletecartproduct(product._id)
          .subscribe((data:any)=>{
            this.cartproducts = this.cartproducts.filter(cartproducts=> cartproducts!==product)
          })
        }

        refreshcartproduct(product:any){
         this.router.navigate(['/cart'])
        }
  
}

  
