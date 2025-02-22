import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import {MessagesComponent} from './messages/messages.component';
import {PatientDashboardComponent} from './patient-dashboard/patient-dashboard.component';
import {WellnessGoalsComponent} from './wellness-goals/wellness-goals.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';

const routes: Routes = [
  // Add guard to all the component check the user is having provider access or not, 
  { path: 'profile', component: ProfileComponent ,
    //canActivate:
  },
  { path: 'messages', component: MessagesComponent },
  { path: 'wellness-goals', component: WellnessGoalsComponent },
  { path: 'dashboard', component: PatientDashboardComponent },
  {path: '', component: NavBarComponent},
  { path: '**', redirectTo: '/dashboard' }, // Fallback route (you can also redirect to 404 error but here i'm redirecting to dashboard page) 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}