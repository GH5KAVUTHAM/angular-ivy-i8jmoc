import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
    {path:'',component:ProductListComponent}
  ]) ],
  declarations: [ AppComponent, TopBarComponent,  ProductListComponent,ProductAlertComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
