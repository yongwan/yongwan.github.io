import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Post } from '../_services/post';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnChanges {
  @Input('post') post: Post;
  content: string;

  constructor(
    private postService: PostService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['post'].currentValue) {
      this.getPostContent(changes['post'].currentValue);
    }
  }

  getPostContent(post: Post): void {
    this.postService.getPostContent(post.filepath)
      .subscribe(content => this.content = content);
  }
}
