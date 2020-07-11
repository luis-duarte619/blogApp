import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsPage } from './blogs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: BlogsPage,
    children: [
      {
        path: 'luis-blogs',
        children: [
          {
            path: '',
            loadChildren: () => import('./luis-blogs/luis-blogs.module').then(m => m.LuisBlogsPageModule)
          },
          {
            path: ':blogId',
            loadChildren: () => import('./luis-blogs/blog-details/blog-details.module').then(m => m.BlogDetailsPageModule)
          }
        ]
      },
      {
        path: 'user-blogs',
        children: [
          {
            path: '',
            loadChildren: () => import('./user-blogs/user-blogs.module').then(m => m.UserBlogsPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./user-blogs/new-blog/new-blog.module').then(m => m.NewBlogPageModule)
          },

        ]
      },
      {
        path: '',
        redirectTo: '/blogs/tabs/luis-blogs',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/blogs/tabs/luis-blogs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsPageRoutingModule {}




