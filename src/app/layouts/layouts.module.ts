import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule.forRoot()
  ],
  declarations: [WebLayoutComponent]
})
export class LayoutsModule { }
