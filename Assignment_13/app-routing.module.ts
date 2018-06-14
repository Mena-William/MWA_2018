import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { FarmsComponent } from "./farms/farms.component";
import { FarmDetailsComponent } from "./farm-details/farm-details.component";

//const routes: Routes = [];
const MY_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'farms', component: FarmsComponent },
  { path: 'farmDetials', component: FarmDetailsComponent }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
//export class AppRoutingModule { }

export const myRoutes = RouterModule.forRoot(MY_ROUTES);

