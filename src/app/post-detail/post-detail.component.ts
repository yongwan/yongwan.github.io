import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../_services/post';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  @Input('post') post: Post;
  content: string;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getPostContent(this.post);
  }

  getPostContent(post: Post): void {
    this.postService.getPostContent(post.filepath)
      .subscribe(content => this.content = content);
  }
}
