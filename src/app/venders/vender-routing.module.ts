import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VNgoComponent } from './v-ngo/v-ngo.component';
import { VAccomodationHomeStayComponent } from './v-accomodation-home-stay/v-accomodation-home-stay.component';
import { VAccomodationKennelComponent } from './v-accomodation-kennel/v-accomodation-kennel.component';
import { VAdoptionAvailableComponent } from './v-adoption-available/v-adoption-available.component';
import { VDogTrainerComponent } from './v-dog-trainer/v-dog-trainer.component';
import { VDogWalkingComponent } from './v-dog-walking/v-dog-walking.component';
import { VDroomingComponent } from './v-drooming/v-drooming.component';
import { VFoodComponent } from './v-food/v-food.component';
import { VHomeMadeProductsComponent } from './v-home-made-products/v-home-made-products.component';
import { VOutDoorActivityComponent } from './v-out-door-activity/v-out-door-activity.component';
import { VLostFoundComponent } from './v-lost-found/v-lost-found.component';
import { VSwimmingPoolComponent } from './v-swimming-pool/v-swimming-pool.component';
import { VTransportationComponent } from './v-transportation/v-transportation.component';
import { VWishListComponent } from './v-wish-list/v-wish-list.component';

const routes: Routes = [
  {
    path:'venders',
    children:[
      {path:'v-ngo',component:VNgoComponent},
      {path:'v-home-stay',component:VAccomodationHomeStayComponent},
      {path:'v-kennel',component:VAccomodationKennelComponent},
      {path:'v-adoption',component:VAdoptionAvailableComponent},
      {path:'v-dog-trainer',component:VDogTrainerComponent},
      {path:'v-dog-walking',component:VDogWalkingComponent},
      {path:'v-grooming',component:VDroomingComponent},
      {path:'v-food',component:VFoodComponent},
      {path:'v-home-products',component:VHomeMadeProductsComponent},
      {path:'v-out-door',component:VOutDoorActivityComponent},
      {path:'v-lost-found',component:VLostFoundComponent},
      {path:'v-swimming-pool',component:VSwimmingPoolComponent},
      {path:'v-transportation',component:VTransportationComponent},
      {path:'v-wist-list',component:VWishListComponent},


    ], 
  },
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class VenderRoutingModule { }
