import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.page.html',
  styleUrls: ['./new-blog.page.scss'],
})
export class NewBlogPage implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      blogEntry: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }
  onCreateBlog() {
    console.log(this.form);
  } 
}
