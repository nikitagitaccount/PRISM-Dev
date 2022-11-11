import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingZoneProvisioningComponent } from './landing-zone-provisioning/landing-zone-provisioning.component';

const routes: Routes = [
  {
    path: 'landingZoneProvisioning',
    loadChildren: () => import('./landing-zone-provisioning/landing-zone-provisioning.component').then((m) => m.LandingZoneProvisioningComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
