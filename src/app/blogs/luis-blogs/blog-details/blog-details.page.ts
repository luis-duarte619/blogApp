import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { BlogsService } from '../../blogs.service';
import { Blog } from '../../blog.model';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.page.html',
  styleUrls: ['./blog-details.page.scss'],
})
export class BlogDetailsPage implements OnInit {
  blog: Blog;
  
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('blogId')) {
        this.navCtrl.navigateBack('/blogs/tabs/luis-blogs');
        return;
      }
      this.blog = this.blogsService.getBlog(paramMap.get('blogId'));
    });
  }

  onBookBlog() {
    this.navCtrl.navigateBack('/blogs/tabs/luis-blogs');
  }
}


