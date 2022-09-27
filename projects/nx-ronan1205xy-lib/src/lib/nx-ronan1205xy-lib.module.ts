import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxRonan1205xyLibComponent } from './nx-ronan1205xy-lib.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    NxRonan1205xyLibComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    NxRonan1205xyLibComponent
  ]
})
export class NxRonan1205xyLibModule { }
