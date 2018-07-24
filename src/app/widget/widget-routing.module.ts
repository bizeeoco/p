import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from '../auth.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
import { CAccomodationHomeStayComponent } from './c-accomodation-home-stay/c-accomodation-home-stay.component';
import { CAccomodationKennelComponent } from './c-accomodation-kennel/c-accomodation-kennel.component';
import { CGroomingComponent } from './c-grooming/c-grooming.component';
import { CPetcareComponent } from './c-petcare/c-petcare.component';
import { CSwimmingPoolComponent } from './c-swimming-pool/c-swimming-pool.component';
import { CDogWalkingComponent } from './c-dog-walking/c-dog-walking.component';
import { CDogTrainingComponent } from './c-dog-training/c-dog-training.component';
import { CTransportationComponent } from './c-transportation/c-transportation.component';
import { CPetPhotographyComponent } from './c-pet-photography/c-pet-photography.component';
import { CAccomodationComponent } from './c-accomodation/c-accomodation.component';
import { CWishListDonationsComponent } from './c-wish-list-donations/c-wish-list-donations.component';
import { CFoodComponent } from './c-food/c-food.component';
import { CAdoptionsComponent } from './c-adoptions/c-adoptions.component';
import { CNgoComponent } from './c-ngo/c-ngo.component';
import { CLostFoundComponent } from './c-lost-found/c-lost-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OpenForumComponent } from './open-forum/open-forum.component';

const routes:Routes=[
  { path: '', redirectTo: 'home', pathMatch: 'full'},
   {path:'home',component:HomeComponent},

  {path:'login',component:LoginComponent}, 
  {path:'register',component:RegisterComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent,canActivate: [AuthGuard]},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'profile',component:ProfileComponent},
  {
    path:'contact-us',
    component:ContactUsComponent
   },

   {
    path:'about-us',
    component:AboutUsComponent
   },

   {
    path:'open-forum',
    component:OpenForumComponent
   },

  {
    path: 'services',
 
    children: [
      {
        path: 'c-ngo',
        component: CNgoComponent,
     },
     
     {
       path:'c-lost',
       component:CLostFoundComponent
     },

     {
      path:'c-accomodation',
      component:CAccomodationComponent,
      children:[
        {path:'c-home-stay',component:CAccomodationHomeStayComponent},
        {path:'c-kennels',component:CAccomodationKennelComponent},
      ]
    },
    
     {
       path:'c-adoption',
       component:CAdoptionsComponent
     },
     
     {
      path:'c-food',
      component:CFoodComponent
     },
     {

       path:'c-donation',
       component:CWishListDonationsComponent
     },
     

     {
       path:'c-petcare',
       component:CPetcareComponent,
       children:[
         {path:'c-grooming',component:CGroomingComponent},
         {path:'c-swimming',component:CSwimmingPoolComponent},
         {path:'c-dog-walking',component:CDogWalkingComponent},
         {path:'c-training',component:CDogTrainingComponent},
         {path:'c-transportation',component:CTransportationComponent},
         {path:'c-pet-photography',component:CPetPhotographyComponent},

       ]
     },

     
   ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class WidgetRoutingModule { }
