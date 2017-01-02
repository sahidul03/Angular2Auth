import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/common/signin.component';
import { SignUpComponent } from './components/common/signup.component';
import { PasswordChangeComponent } from './components/common/users/passwordChange/passwordChange.component';
import { ProtectedComponent } from './components/others/protected.component';
import { SingleHouseComponent } from './components/houses/singleHouse/singleHouse.component';

import { AuthGuard } from './services/authGuard/auth.guard';
import { SignInGuard } from './services/signInGuard/signIn.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'signin',
        component: SignInComponent,
        canActivate: [SignInGuard]
    },
    {
        path: 'signup',
        component: SignUpComponent,
        canActivate: [SignInGuard]
    },
    {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'house/:id',
        component: SingleHouseComponent
    },
    {
        path: 'change-password',
        component: PasswordChangeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
