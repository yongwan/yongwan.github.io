import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  //#region Property post
  private _post: Post;

  @Input() set post(value: Post) {
    this._post = value;
    if (this._post) {
      this.getPostContent(this._post);
    }
  }
  get post(): Post {
    return this._post;
  }
  //#endregion

  //#region Property post content
  private _content: string;
  get content(): string {
    return this._content;
  }
  //#endregion

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
  }

  getPostContent(post: Post): void {
    this.postService.getPostContent(post.filepath)
      .subscribe(content => this._content = content);
  }
}
