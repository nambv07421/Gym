import { Routes } from '@angular/router';
import { ListMemberComponent } from './component/list-member/list-member.component';
import { MemberComponent } from './member.component';

export const memberRouter: Routes = [
    {
        path: '',
        component: MemberComponent,
        children: [
            {
                path: 'list',
                component: ListMemberComponent
            },
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ]
    }
]