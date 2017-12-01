import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta, private siteService: SiteService) { }

  ngOnInit() {
    this.getSite();
  }

  getSite(): void {
    this.siteService.getSite().subscribe((site) => {
      this.titleService.setTitle(site.title);
      this.meta.addTag({ name: 'author', content: site.author.name });
    });
  }
}
