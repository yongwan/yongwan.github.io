import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';
import { Site } from '../site';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  site: Site;

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.getSite();
  }

  getSite(): void {
    this.siteService.getSite()
      .subscribe(site => this.site = site);
  }
}
