import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewBlogPageRoutingModule } from './new-blog-routing.module';

import { NewBlogPage } from './new-blog.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewBlogPageRoutingModule
  ],
  declarations: [NewBlogPage]
})
export class NewBlogPageModule {}
