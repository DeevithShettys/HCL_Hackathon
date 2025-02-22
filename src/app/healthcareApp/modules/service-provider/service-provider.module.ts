import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';
import { HealthTopicsComponent } from './health-topics/health-topics.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { PublicRoutingModule} from './service-provider-routing.module'
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    ProviderDashboardComponent,
    HealthTopicsComponent,
    ServicesComponent,
    ContactComponent,
    ViewPatientsComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule
  ]
})
export class ServiceProviderModule { }
