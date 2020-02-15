import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {SearchPhoneComponent} from './search-phone/search-phone.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AuthGaurdService} from './auth-guard.service';
import {AdminComponent} from './admin/admin.component';
import {EndPointComponent} from "./end-point/end-point.component";

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'register', component: RegistrationComponent},
  {path: 'search', component: SearchPhoneComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGaurdService] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGaurdService] },
  { path: 'Nokia', component: EndPointComponent, canActivate: [AuthGaurdService] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
