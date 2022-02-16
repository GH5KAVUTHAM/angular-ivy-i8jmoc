import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
    {path:'',component:ProductListComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent,ProductListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
