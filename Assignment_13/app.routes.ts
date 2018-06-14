import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { FarmsComponent } from "./farms/farms.component";
import { FarmDetailsComponent } from "./farm-details/farm-details.component";

const MY_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'farm', component: FarmsComponent }
    // { path: 'farmDetials', component: FarmDetailsComponent },
    //{ path: 'farmDetials/:id', component: FarmDetailsComponent }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);


