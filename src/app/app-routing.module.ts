import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  { path:'login',component:LoginComponent},
  { path:'forgot-password',component:ForgotPasswordComponent},
  { path:'registration',component:RegistrationComponent},
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
  },
  {
    path: 'provider',
    loadChildren: () => import('./service-provider/service-provider.module').then(m => m.ServiceProviderModule)
  },
  {
    path: 'public',
    loadChildren: () => import('./public-info/public-info.module').then(m => m.PublicInfoModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/login' }, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
