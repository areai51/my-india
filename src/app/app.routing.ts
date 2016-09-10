import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurLeadersComponent } from './layouts/our-leaders/our-leaders.component';
import { CrimeInTheCityComponent } from './layouts/crime-in-the-city/crime-in-the-city.component';
import { OurRiversComponent } from './layouts/our-rivers/our-rivers.component';

const appRoutes: Routes = [
  {
    path: 'our-leaders',
    component: OurLeadersComponent
  },
  {
    path: 'crime-in-the-city',
    component: CrimeInTheCityComponent
  },
  {
    path: 'our-rivers',
    component: OurRiversComponent
  },
  {
    path: '',
    redirectTo: '/our-leaders',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
