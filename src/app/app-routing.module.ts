import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { Dropdown1Component } from './dropdown1/dropdown1.component';


const routes: Routes = [{ path:"", redirectTo:'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'Features', component: FeaturesComponent},
  { path: 'Pricing', component: PricingComponent},
  {path: 'Dropdown1', component: Dropdown1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
