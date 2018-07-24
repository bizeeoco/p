import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebLayoutComponent} from './layouts/web-layout/web-layout.component';
import { LoginComponent } from './widget/login/login.component';
import { RegisterComponent } from './widget/register/register.component';
import { HomeComponent } from './widget/home/home.component';
import { ResetPasswordComponent } from './widget/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './widget/forgot-password/forgot-password.component';
import { AuthGuard } from './auth.guard';
import { WebDashboardComponent } from './dashboards/web-dashboard/web-dashboard.component';
import { ProfileComponent } from './widget/profile/profile.component';


const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
   
   {
    path: '',
  component: WebLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboards/web-dashboard/web-dashboard.module#WebDashboardModule',
     },
      {
        path: 'dashboard/:id',
        loadChildren: './dashboards/web-dashboard/web-dashboard.module#WebDashboardModule'
      }
   ]
  },
  
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
