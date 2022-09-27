import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxRonan1205xyLibModule } from 'nx-ronan1205xy-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxRonan1205xyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
