# 나를 위한 GitHub Page 설정 - Angular 5
___

다시 블로깅을 해볼까 말까 하는 데 Angular Version이 업데이트 되었다.
익숙하지 않고 어렵다. 걍 티스토리 쓸까하는 욕구가 치솟는다.

## 초기 설정
### 설치 파일
+ [Node.js][NodeJs]
+ [Git][Git]

### Global Npm
NodeJs Global Command 설치

```batch
npm install -g @angular/cli
npm install -g angular-cli-ghpages
npm install -g gurnt-cli
```

+ @angular/cli: Angular Application 구조 생성
+ angular-cli-ghpages: Angular Application을 GitHub에 Publish
+ gurnt-cli: Markdown 파일로부터 Post 정보 생성

### Git
#### SSH Key 설정
로컬 장비에서 SSH Key 생성후 Clipboard에 복사

```batch
ssh-keygen -t rsa -b 4096 -C "yongwan.jo@wany.kr"
clip < ~/.ssh/id_rsa.pub
```

SSH Key 생성 명령어에서는 모두 Enter 넘어가도록 하자.
GitHub의 설정에서 클립보드에 복사된 SSH Key 추가

#### Git Clone
회사는 방화벽으로 ssh 인증이 안되기 때문에 아래와 같이 설정

```batch
git config --global url."https://".insteadOf git://
git clone git@github.com:yongwan/yongwan.github.io.git
```

### Node Package 설치
package.json에 정의된 Node Package 설치.

```batch
npm install --save
```

--save 옵션은 package.json에 최신 버전 정보 업데이트 위해 사용

## Github Upload
dev branch가 main source branch

### Grunt
Gruntfile.js에 정의되어 있음.
Markdown 파일 정보을 읽어 src/assets/posts.json 파일에 업데이트

```batch
grunt default
```

Visual Stutio Code에서 어떤 경우 아래와 같은 에러와 함께 Task가 동작하지 않음.
Error: The grunt task detection didn't contribute a task for the following configuration:

### Production build - Angular CLI
Angular CLI의 Production Build 옵션 사용
```batch
ng build --prod --base-href "https://yongwan.github.io/"
```

아래의 Error는 node_modules/angular2-markdown/markdown/prism.languages.metadata.json 의 값을 [null]에서 []로 변경하면 된다.
```
ERROR in TypeError: Cannot read property 'version' of null
```

### Github Push - angular-cli-ghpages 
angular-cli-ghpages를 사용하여 Github에 master branch로 push 

```batch
ngh --branch=master
```

참고 URL:
+ [Generating a new SSH key and adding it to the ssh-agent][GenerateSSH]
+ [git:// protocol blocked by company, how can I get around that?][SSH]
+ [Adding a new SSH key to your GitHub account][AddSSH]


[NodeJs]: https://nodejs.org/
[Git]: https://git-scm.com/
[SSH]: http://stackoverflow.com/questions/4891527/git-protocol-blocked-by-company-how-can-i-get-around-that
[GenerateSSH]: https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
[AddSSH]: https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/
