import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
  }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    // https://angular.io/guide/router#snapshot-the-no-observable-alternative
    const postName = this.route.snapshot.paramMap.get('post');

    if (postName) {
      this.postService.getPost(postName)
        .subscribe(post => this.post = post);
    } else {
      this.postService.getFistPost()
        .subscribe(post => this.post = post);
    }
  }
}
