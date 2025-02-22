import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components
import {LoginComponent} from './healthcareApp/login/login.component';
import {ForgotPasswordComponent} from './healthcareApp/forgot-password/forgot-password.component';
import {RegistrationComponent} from './healthcareApp/registration/registration.component';

const routes: Routes = [
  { path:'login',component:LoginComponent},
  { path:'forgot-password',component:ForgotPasswordComponent},
  { path:'registration',component:RegistrationComponent},
  {
    path: 'patient',
    loadChildren: () => import('./healthcareApp/modules/patient/patient.module').then(m => m.PatientModule)
  },
  {
    path: 'provider',
    loadChildren: () => import('./healthcareApp/modules/service-provider/service-provider.module').then(m => m.ServiceProviderModule)
  },
  {
    path: 'public',
    loadChildren: () => import('./healthcareApp/modules/public-info/public-info.module').then(m => m.PublicInfoModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/login' }, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
