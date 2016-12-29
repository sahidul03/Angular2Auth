import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/common/header.component';
import { SignInComponent } from './components/common/signin.component';
import { SignUpComponent } from './components/common/signup.component';
import { ProtectedComponent } from './components/others/protected.component';
import { GetHousesComponent } from './components/houses/getHouses.component';
import { SingleHouseComponent } from './components/houses/singleHouse/singleHouse.component';


import { AppRoutingModule } from './app.routing';

import { SignInGuard } from './services/signInGuard/signIn.guard';
import { AuthGuard } from './services/authGuard/auth.guard';
import { AuthService } from './services/authServices/auth.service';
import { HouseService } from './services/apiServices/house.service';




@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, HttpModule, AppRoutingModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    ProtectedComponent,
    HomeComponent,
    GetHousesComponent,
    SingleHouseComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ AuthGuard, AuthService, SignInGuard, HouseService ]
})
export class AppModule { }
