export interface Site {
  title: string;
  author: Author;
  navs: Nav[];
}

export interface Nav {
  title: string;
  url: string;
}

export interface Author {
  name: string;
  email: string;
  links: Link[];
}

export interface Link {
  title: string;
  url: string;
  cssClass: string;
}
