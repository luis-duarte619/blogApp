import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { BlogsService } from '../blogs.service';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-luis-blogs',
  templateUrl: './luis-blogs.page.html',
  styleUrls: ['./luis-blogs.page.scss'],
})
export class LuisBlogsPage implements OnInit {
  loadedBlogs: Blog[];

  constructor(
    private blogsService: BlogsService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.loadedBlogs = this.blogsService.blogs;
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }
}

