import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import {HealthTopicsComponent} from './health-topics/health-topics.component';
import {ServicesComponent} from './services/services.component';
import {ProviderDashboardComponent} from './provider-dashboard/provider-dashboard.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';

const routes: Routes = [
  // Add guard to all the component check the user is having provider access or not, 
  { path: 'contact', component: ContactComponent },
  { path: 'health-topics', component: HealthTopicsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'home', component:ProviderDashboardComponent},
  {path: '', component: NavBarComponent},
  { path: '**', redirectTo: '/home' }, // Fallback route (you can also redirect to 404 error but here i'm redirecting to dashboard page) 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}