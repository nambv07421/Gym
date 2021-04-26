import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './home.component';


export const homeRouter: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { animation: 'isLeft' },
        children: [
            {
                path: 'list',
                component: DashboardComponent
            },
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ]
    }
]