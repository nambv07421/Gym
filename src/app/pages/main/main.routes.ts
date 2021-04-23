import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('./home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'user',
                loadChildren: () =>
                    import('./member/member.module').then((m) => m.MemberModule),
            }
            ,
            {
                path: 'trainer',
            }
            ,
            {
                path: 'shift',
            }
            ,
            {
                path: 'workday',
            }
            ,
            {
                path: 'invoice',
            }
            ,
            {
                path: 'package',
            }
            ,
            {
                path: 'subject',
            }
            ,
            {
                path: 'discount',
            },

            {
                path: 'post',
            },
            {
                path: 'feedback',
            },
            {
                path: 'contact',
            },
            {
                path: '',
                redirectTo: 'user',
                pathMatch: 'full'
            }
        ]
    },
];
