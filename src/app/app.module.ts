import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CrimeInTheCityComponent } from './crime-in-the-city/crime-in-the-city.component';
import { OurLeadersComponent } from './our-leaders/our-leaders.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CrimeInTheCityComponent,
    OurLeadersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
