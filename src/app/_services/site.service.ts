import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Site } from './site';

@Injectable()
export class SiteService {
  private siteUrl = 'assets/site.json';

  private site: Site;

  constructor(private http: HttpClient) {
  }

  public getSite(): Observable<Site> {
    if ( this.site ) {
      return of(this.site);
    } else {
      return this.http.get<Site>(this.siteUrl)
        .pipe(
          tap(site => this.site = site)
        );
    }
  }
}
