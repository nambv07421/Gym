import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
            },
            {
                path: 'user',
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
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
];
