import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from './post';

@Injectable()
export class PostService {
  private postsUrl = 'assets/posts/posts.json';

  private posts: Post[];
  private postsPerPage: number;

  constructor(private http: HttpClient) {
    this.postsPerPage = 3;
  }

  public getPosts(): Observable<Post[]> {
    if (this.posts) {
      return of(this.posts);
    } else {
      return this.http.get<Post[]>(this.postsUrl)
        .pipe(
        tap(posts => this.posts = posts)
        );
    }
  }

  public getPostsByPage(page: number): Observable<Post[]> {
    const postsByPage = this.getPosts().map((posts) => {
      const start = this.postsPerPage * (page - 1);
      const end = start + 3;
      return posts.slice(start, end);
    });

    return postsByPage;
  }

  public getFistPost(): Observable<Post> {
    return this.getPosts().map(posts => posts[0]);
  }

  public getPost(postName: string): Observable<Post> {
    const year = postName.split('-')[0];
    const fileName = postName + '.md';
    
    const filePath = 'assets/posts/' + year + '/' + fileName;

    return this.getPosts().map(posts => posts.find(post => post.filepath == filePath));
  }

  public getPostContent(filePath: string): Observable<string> {
    const content = this.http.get(filePath, { responseType: 'text' });

    return content;
  }
}
