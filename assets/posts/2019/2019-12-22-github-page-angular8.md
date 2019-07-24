# 나를 위한 GitHub Page 설정 - Angular 8
___

간만에 업데이트.
Angular 5에서 8로 올리는 것도 일이다.

```batch
grunt default
ng build --prod --base-href "https://yongwan.github.io/"
npx angular-cli-ghpages --dir=dist/yongwan.github.io --branch=master
```

+ angular2-markdown에서 ngx-markdown으로 변경
