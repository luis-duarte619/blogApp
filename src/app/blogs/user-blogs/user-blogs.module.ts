import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserBlogsPageRoutingModule } from './user-blogs-routing.module';

import { UserBlogsPage } from './user-blogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserBlogsPageRoutingModule
  ],
  declarations: [UserBlogsPage]
})
export class UserBlogsPageModule {}
