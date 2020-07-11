import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuisBlogsPageRoutingModule } from './luis-blogs-routing.module';

import { LuisBlogsPage } from './luis-blogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuisBlogsPageRoutingModule
  ],
  declarations: [LuisBlogsPage]
})
export class LuisBlogsPageModule {}
