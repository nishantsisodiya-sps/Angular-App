import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import {  RouterModule, Routes } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';

import { LoginComponent } from './lognin/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TvComponent } from './products/tv/tv.component';
import { KeyboardComponent } from './products/keyboard/keyboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashServiceService } from './appServices/dash-service.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';



const appRouts:Routes = [
    {path:'', redirectTo:'login', pathMatch: 'full' },
    {path:'home' , component:HomeComponent},
    {path:'login' , component:LoginComponent},
    {path:'about' , component:AboutComponent},
    {path:'contactus' , component:ContactUsComponent},
    {path:'products' , component:ProductsComponent},
    {path:'search' , component:ParentComponent},
    {path:'search' , component:ParentComponent, children:[
      {path:"child", component: ChildComponent}
    ]},
    {path:'dashboard' , component:DashboardComponent},
    {path:'products', component:ProductsComponent ,children:[
      {path:'laptop', component: LaptopComponent},
      {path:'mobile', component: MobileComponent},
      {path:'tv', component: TvComponent},
      {path:'keyboard', component: KeyboardComponent},
    ]},
    {path:'**' , component:PageNotFoundComponent},
  ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ProductsComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    KeyboardComponent,
    DashboardComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouts),
    HttpClientModule
  ],
  providers: [DashServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
