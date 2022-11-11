import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { UIShellModule } from 'carbon-components-angular/ui-shell';
import { SearchModule, NavigationItem, ButtonModule, InputModule, TilesModule} from 'carbon-components-angular';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { LandingZoneProvisioningComponent } from './landing-zone-provisioning/landing-zone-provisioning.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LandingZoneProvisioningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    SearchModule,
    ButtonModule,
    InputModule,
    TilesModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent

      }
      
    ])
  ],
 
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
