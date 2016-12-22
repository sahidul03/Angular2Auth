import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/common/signin.component';
import { SignUpComponent } from './components/common/signup.component';
import { ProtectedComponent } from './components/others/protected.component';

import { AuthGuard } from './services/authGuard/auth.guard';
import { SignInGuard } from './services/signInGuard/signIn.guard';

const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/signin',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
