import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const usersRoutes: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'user/:id', component: UserDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(usersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule { }
