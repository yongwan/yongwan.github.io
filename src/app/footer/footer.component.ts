import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SiteService } from '../_services/site.service';
import { Site } from '../_services/site';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
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
