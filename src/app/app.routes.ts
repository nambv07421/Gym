import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/auth/auth.module').then((m) => m.AuthModule),
        // canActivate: [AppGuard],
    },
    {
        path: 'main',
        loadChildren: () =>
            import('./pages/main/main.module').then((m) => m.MainModule),
    },
    {
        path: 'main2',
        loadChildren: () =>
            import('./pages/main/main.module').then((m) => m.MainModule),
    },
];
