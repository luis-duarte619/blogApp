import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBlogPage } from './new-blog.page';

const routes: Routes = [
  {
    path: '',
    component: NewBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewBlogPageRoutingModule {}
