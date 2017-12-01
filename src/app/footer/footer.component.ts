import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';
import { Observable } from 'rxjs/Observable';
import { Site } from '../site';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  site: Site;

  constructor(private siteService: SiteService) {
  }

  ngOnInit() {
    this.getSite();
  }

  getSite(): void {
    this.siteService.getSite()
      .subscribe(site => this.site = site);
  }
}
