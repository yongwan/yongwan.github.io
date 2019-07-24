import { Component, OnInit } from '@angular/core';
import { Post } from '../_services/post';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentPosts: Post[];
  currentPage: number;

  constructor(
    private postService: PostService
  ) {
  }

  ngOnInit() {
    this.currentPage = 1;
    this.currentPosts = [];
    this.appendPost();
  }

  onScroll(): void {
    this.currentPage = this.currentPage + 1;
    this.appendPost();
  }

  appendPost(): void {
    this.postService.getPostsByPage(this.currentPage)
      .subscribe(posts => this.currentPosts = this.currentPosts.concat(posts));
  }
}
