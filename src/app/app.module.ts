import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
    {path:'',component:ProductListComponent},
    {path:'product/productId',component: ProductDetailsComponent}
  ]) ],
  declarations: [ AppComponent, TopBarComponent,
      ProductListComponent, 
      ProductAlertComponent,
    ProductDetailsComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
