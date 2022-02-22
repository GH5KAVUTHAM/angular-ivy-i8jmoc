import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    {path:'',component:ProductListComponent},
    {path:'product/:productId',component: ProductDetailsComponent},
    {path:'cart', component: CartComponent},
  ]) ],
  declarations: [ AppComponent, TopBarComponent,
      ProductListComponent, 
      ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

