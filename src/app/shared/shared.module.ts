import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialComponentsModule } from './material.module';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {ConfigService} from '../core/config.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialComponentsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialComponentsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ConfigService
      ]
    };
  }
}
