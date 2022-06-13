import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';



import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { FruitsComponent } from './fruits/fruits.component';
import {DairyComponent} from './dairy/dairy.component';
import {ProductsComponent} from './products/products.component';
import { SellersignupComponent } from './sellersignup/sellersignup.component';
import {UserproductComponent} from './userproduct/userproduct.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SellerPProductComponent } from './seller-p-product/seller-p-product.component';
import { AddTocartComponent } from './add-tocart/add-tocart.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { AddresspageComponent } from './addresspage/addresspage.component';




const routes: Routes = [{path:'',component:HomeComponent},{path:'about-us',component:AboutusComponent},{path:'contact-us',component:ContactUsComponent},
                        {path:'vegetables',component:VegetablesComponent},{path:'sign-up',component:UsersignupComponent},{path:'signup-seller',component:SellersignupComponent},
                        {path:'sign-in',component:UsersigninComponent},{path:'login',component:SellerloginComponent},
                         {path:'fruits',component:FruitsComponent},{path:'dairy',component:DairyComponent},{path:'products',component:ProductsComponent},
                         {path:'home',canActivate:[AuthGuard],component:UserproductComponent},
                        {path:'sellerhome',canActivate:[AuthGuard],component:SellerhomeComponent},{path:'add-product',canActivate:[AuthGuard],component:AddproductComponent}
                        ,{path:'update',canActivate:[AuthGuard],component:SellerPProductComponent},{path:'view-product',canActivate:[AuthGuard],component:AddTocartComponent},
                        {path:'cart',canActivate:[AuthGuard],component:CartpageComponent},{path:'address',canActivate:[AuthGuard],component:AddresspageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
