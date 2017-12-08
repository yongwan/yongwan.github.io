import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
  }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    this.post$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        const postName = params.get('post');

        if (postName) {
          return this.postService.getPost(postName);
        } else {
          return this.postService.getFirstPost();
        }
      });
  }
}
