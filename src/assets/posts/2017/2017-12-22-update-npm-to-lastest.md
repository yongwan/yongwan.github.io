# NodeJS Package를 최신 버전으로 Update하는 방법
___

[npm-check-updates][npm-check-updates]를 사용하자.
단, Angular Lastest와 TypeScript Lastest가 호환이 안될 수도 있다.

```batch
npm install -g npm-check-updates
ncu -u
```

+ -u 옵션은 package.json 파일을 업데이트 한다.
+ -a 옵션은 package.json 파일을 업데이트 하고 NodeJS Package도 업데이트 한다.

[npm-check-updates]: https://www.npmjs.com/package/npm-check-updates/

