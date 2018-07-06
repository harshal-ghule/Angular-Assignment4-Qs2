import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';

import { StudentDetailsService } from './student-details.service';// explictly imported
import {HttpClientModule} from '@angular/common/http';// explictly imported

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Add the name into import
  ],
  providers: [StudentDetailsService], //Register name of our service
  bootstrap: [AppComponent]
})
export class AppModule { }
