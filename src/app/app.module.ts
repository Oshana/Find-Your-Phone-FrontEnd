import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UserRegistrationService} from "./user-registration.service";
import { SearchPhoneComponent } from './search-phone/search-phone.component';
import {PhoneSearchService} from "./phone-search.service";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminComponent } from './admin/admin.component';
import { EndPointComponent } from './end-point/end-point.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SearchPhoneComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    UserProfileComponent,
    AdminComponent,
    EndPointComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserRegistrationService, PhoneSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
