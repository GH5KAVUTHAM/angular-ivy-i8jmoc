import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleComponent } from '../example/example.component';
import { Example2Component } from '../example2/example2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ExampleComponent, Example2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
