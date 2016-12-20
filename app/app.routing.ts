import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SignInComponent } from './components/common/signin.component';
import { SignUpComponent } from './components/common/signup.component';
import { ProtectedComponent } from './components/others/protected.component';

import { AuthGuard } from './services/authGuard/auth.guard';

const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/signup',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: SignInComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [AuthGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
