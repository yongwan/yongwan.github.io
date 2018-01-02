import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SiteService } from './_services/site.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private meta: Meta,
    private siteService: SiteService
  ) { }

  ngOnInit() {
    this.getHead();
  }

  getHead(): void {
    this.siteService.getSite().subscribe((site) => {
      this.titleService.setTitle(site.title);
      this.meta.addTag({ name: 'author', content: site.author.name });
    });
  }
}
