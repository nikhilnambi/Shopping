import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
    UserheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    
   
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
