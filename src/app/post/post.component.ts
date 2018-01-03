import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

import { PostService } from '../_services/post.service';
import { Post } from '../_services/post';
import { Tree } from '@angular/router/src/utils/tree';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [NgbPaginationConfig]
})
export class PostComponent implements OnInit {
  post: Post;
  totalPage: number;
  currentPageIndex: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private paginationConfig: NgbPaginationConfig
  ) {
    paginationConfig.boundaryLinks = true;
    paginationConfig.maxSize = 5;
    paginationConfig.pageSize = 1;
  }

  ngOnInit() {
    this.currentPageIndex = 1;

    this.getPost();
    this.getTotalPage();
    this.getCurrentPageIndex();
  }

  getPost(): void {
    this.route.paramMap.subscribe(params => {
      const postName = params.get('post');

      if (postName) {
        this.postService.getPost(postName).subscribe(post => {
          this.post = post;
        });
      } else {
        this.pageChanged(1);
      }
    });
  }

  getTotalPage(): void {
    this.postService.getPosts().subscribe(posts => {
      this.totalPage = posts.length;
    });
  }

  getCurrentPageIndex(): void {
    this.route.paramMap.subscribe(params => {
      const postName = params.get('post');

      if (postName) {
        this.postService.getPostIndex(postName).subscribe(index => {
          this.currentPageIndex = index + 1;
        });
      }
    });
  }

  pageChanged(page: number) {
    if (page) {
      this.postService.getPostByIndex(page - 1).subscribe(post => {
        this.router.navigate(['/posts', post.filename]);
        this.post = post;
      });
    }
  }
}
