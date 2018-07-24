import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
// import {MaterialComponentsModule} from '../shared/material.module';
import { RegisterComponent } from './register/register.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {FlexLayoutModule} from '@angular/flex-layout';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {CustomValidator} from '../shared/confirm-equal-validator.directive';
import {Routes, RouterModule} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import { WidgetRoutingModule } from './/widget-routing.module';
import { CLostFoundComponent } from './c-lost-found/c-lost-found.component';
import { CGroomingComponent } from './c-grooming/c-grooming.component';
import { CPetPhotographyComponent } from './c-pet-photography/c-pet-photography.component';
import { CDogTrainingComponent } from './c-dog-training/c-dog-training.component';
import { CDogTrainerComponent } from './c-dog-trainer/c-dog-trainer.component';
import { CHomeMadeProductsComponent } from './c-home-made-products/c-home-made-products.component';
import { CAdoptionsComponent } from './c-adoptions/c-adoptions.component';
import { CFoodComponent } from './c-food/c-food.component';
import { CTransportationComponent } from './c-transportation/c-transportation.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CMyPetMemoriesComponent } from './c-my-pet-memories/c-my-pet-memories.component';
import { CAccomodationKennelComponent } from './c-accomodation-kennel/c-accomodation-kennel.component';
import { COutDoorActivityComponent } from './c-out-door-activity/c-out-door-activity.component';
import { CDogWalkingComponent } from './c-dog-walking/c-dog-walking.component';
import { CSwimmingPoolComponent } from './c-swimming-pool/c-swimming-pool.component';
import { CNgoComponent } from './c-ngo/c-ngo.component';
import { CWishListDonationsComponent } from './c-wish-list-donations/c-wish-list-donations.component';
import { CAccomodationHomeStayComponent } from './c-accomodation-home-stay/c-accomodation-home-stay.component';
import { CAccomodationComponent } from './c-accomodation/c-accomodation.component';
import { CPetcareComponent } from './c-petcare/c-petcare.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OpenForumComponent } from './open-forum/open-forum.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [];
@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes),HttpClientModule, WidgetRoutingModule
   
  ],
  
  exports: [RouterModule],
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, ForgotPasswordComponent, ProfileComponent, CLostFoundComponent, CGroomingComponent, CPetPhotographyComponent, CDogTrainingComponent, CDogTrainerComponent, CHomeMadeProductsComponent, CAdoptionsComponent, CFoodComponent, CTransportationComponent, WhyUsComponent, CMyPetMemoriesComponent, CAccomodationKennelComponent, COutDoorActivityComponent, CDogWalkingComponent, CSwimmingPoolComponent, CNgoComponent, CWishListDonationsComponent, CAccomodationHomeStayComponent, CAccomodationComponent, CPetcareComponent, ContactUsComponent, OpenForumComponent, AboutUsComponent,]
})
export class WidgetModule { }
