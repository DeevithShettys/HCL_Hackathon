import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WellnessGoalsComponent } from './wellness-goals/wellness-goals.component';
import { MessagesComponent } from './messages/messages.component';
import {PublicRoutingModule} from './patient-routing.module';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    PatientDashboardComponent,
    ProfileComponent,
    WellnessGoalsComponent,
    MessagesComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule
  ]
})
export class PatientModule { }
