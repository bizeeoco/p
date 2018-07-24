import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutsModule} from './layouts/layouts.module';
import { WidgetModule } from './widget/widget.module';
import { HeaderComponent } from './widget/header/header.component';
import { FooterComponent } from './widget/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {MaterialComponentsModule} from './shared/material.module';
import {CustomValidator} from './shared/confirm-equal-validator.directive';
import { HomeComponent } from './widget/home/home.component';
import { AuthGuard } from './auth.guard';
import { WebDashboardComponent } from './dashboards/web-dashboard/web-dashboard.component';
import { VendersModule } from './venders/venders.module';
import { VenderRoutingModule } from './venders/vender-routing.module';










@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WebDashboardComponent
    

  ],
  imports: [
    NgbModule.forRoot(),
    VendersModule,
    WidgetModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    VenderRoutingModule,
    LayoutsModule,
    // CustomValidator
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent,]
})
export class AppModule { }
