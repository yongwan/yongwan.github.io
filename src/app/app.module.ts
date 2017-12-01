import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'angular2-markdown';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';

import { SiteService } from './site.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    PostComponent,
    AboutComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    Title,
    SiteService,
    PostService
  ],
  bootstrap: [
    HeadComponent,
    AppComponent
  ]
})
export class AppModule { }
