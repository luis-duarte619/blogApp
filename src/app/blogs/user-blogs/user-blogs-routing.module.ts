import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserBlogsPage } from './user-blogs.page';

const routes: Routes = [
  {
    path: '',
    component: UserBlogsPage
  },
  {
    path: 'new-blog',
    loadChildren: () => import('./new-blog/new-blog.module').then( m => m.NewBlogPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBlogsPageRoutingModule {}
