import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(ROUTES)
  ],
  declarations: [PostsComponent],
  exports: [PostsComponent]
})
export class PostsModule { }
