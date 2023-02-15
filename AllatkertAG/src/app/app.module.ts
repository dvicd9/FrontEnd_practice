import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NyitooldalComponent } from './nyitooldal/nyitooldal.component';
import { AllatainkComponent } from './allataink/allataink.component';
import { UjAllatComponent } from './uj-allat/uj-allat.component';

@NgModule({
  declarations: [
    AppComponent,
    NyitooldalComponent,
    AllatainkComponent,
    UjAllatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
