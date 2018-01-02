import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'angular2-markdown';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';

import { PostDetailComponent } from './post-detail/post-detail.component';

import { SiteService } from './_services/site.service';
import { PostService } from './_services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    PostComponent,
    AboutComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [
    Title,
    SiteService,
    PostService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
