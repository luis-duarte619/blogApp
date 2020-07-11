import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuisBlogsPage } from './luis-blogs.page';

const routes: Routes = [
  {
    path: '',
    component: LuisBlogsPage
  },
  {
    path: 'blog-details',
    loadChildren: () => import('./blog-details/blog-details.module').then( m => m.BlogDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuisBlogsPageRoutingModule {}
