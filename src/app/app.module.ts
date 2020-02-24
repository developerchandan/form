import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { Dropdown1Component } from './dropdown1/dropdown1.component';
import { ServicedataService } from './servicedata.service';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    Dropdown1Component,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
