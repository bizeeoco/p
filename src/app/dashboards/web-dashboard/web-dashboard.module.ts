import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebDashboardRoutingModule } from './web-dashboard-routing.module';
import { WebDashboardComponent } from './web-dashboard.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    WebDashboardRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [WebDashboardComponent,]
})
export class WebDashboardModule { }
