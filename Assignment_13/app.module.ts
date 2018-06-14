import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { myRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmsComponent } from './farms/farms.component';
import { HomeComponent } from './home/home.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
// import { DbService } from './db.service';


@NgModule({
  declarations: [
    AppComponent,
    FarmsComponent,
    HomeComponent,
    FarmDetailsComponent
  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  // providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
