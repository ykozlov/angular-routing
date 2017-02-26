import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

const ROUTES: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(ROUTES)
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class UsersModule { }
