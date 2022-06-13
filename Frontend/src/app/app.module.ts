import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{TokenInterceptorService}from'./token-interceptor.service';
import { UserdataService } from './userdata.service';




import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { FruitsComponent } from './fruits/fruits.component';
import { DairyComponent } from './dairy/dairy.component';
import { ProductsComponent } from './products/products.component';
import { SellersignupComponent } from './sellersignup/sellersignup.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UserproductComponent } from './userproduct/userproduct.component';
import { SellerheaderComponent } from './sellerheader/sellerheader.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SellerPProductComponent } from './seller-p-product/seller-p-product.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { AddTocartComponent } from './add-tocart/add-tocart.component';
import { AddresspageComponent } from './addresspage/addresspage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutusComponent,
    ContactUsComponent,
    VegetablesComponent,
    UsersignupComponent,
    UsersigninComponent,
    SellerloginComponent,
    FruitsComponent,
    DairyComponent,
    ProductsComponent,
    SellersignupComponent,
    UserheaderComponent,
    UserproductComponent,
    SellerheaderComponent,
    SellerhomeComponent,
    AddproductComponent,
    SellerPProductComponent,
    CartpageComponent,
    AddTocartComponent,
    AddresspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    
    
   
  ],
  providers: [UserdataService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
