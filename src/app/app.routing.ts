import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurLeadersComponent } from './our-leaders/our-leaders.component';
import { CrimeInTheCityComponent } from './crime-in-the-city/crime-in-the-city.component';

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
    path: '',
    redirectTo: '/our-leaders',
    pathMatch: 'full'
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
