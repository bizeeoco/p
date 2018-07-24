import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VNgoComponent } from './v-ngo/v-ngo.component';

import { VenderRoutingModule } from './/vender-routing.module';
import { VOutDoorActivityComponent } from './v-out-door-activity/v-out-door-activity.component';
import { VDogWalkingComponent } from './v-dog-walking/v-dog-walking.component';
import { VSwimmingPoolComponent } from './v-swimming-pool/v-swimming-pool.component';
import { VWishListComponent } from './v-wish-list/v-wish-list.component';
import { VAccomodationHomeStayComponent } from './v-accomodation-home-stay/v-accomodation-home-stay.component';
import { VAccomodationKennelComponent } from './v-accomodation-kennel/v-accomodation-kennel.component';
import { VTransportationComponent } from './v-transportation/v-transportation.component';
import { VFoodComponent } from './v-food/v-food.component';
import { VAdoptionAvailableComponent } from './v-adoption-available/v-adoption-available.component';
import { VHomeMadeProductsComponent } from './v-home-made-products/v-home-made-products.component';
import { VDogTrainerComponent } from './v-dog-trainer/v-dog-trainer.component';
import { VDroomingComponent } from './v-drooming/v-drooming.component';
import { VLostFoundComponent } from './v-lost-found/v-lost-found.component';



@NgModule({
  imports: [
    CommonModule,

    VenderRoutingModule,
 
  

  ],
  declarations: [VNgoComponent, VOutDoorActivityComponent, VDogWalkingComponent, VSwimmingPoolComponent, VWishListComponent, VAccomodationHomeStayComponent, VAccomodationKennelComponent, VTransportationComponent, VFoodComponent, VAdoptionAvailableComponent, VHomeMadeProductsComponent, VDogTrainerComponent, VDroomingComponent, VLostFoundComponent]
})
export class VendersModule { }
