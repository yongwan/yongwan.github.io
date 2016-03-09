---
title: "나를 위한 GitHub Page 설정"
categories: ["common tech", "git"]
tags: ["git", "github", "configuration"]
---

# 나를 위한 GitHub Page 설정
___

오랜만에 GitHub Blogging을 다시 해보려 하니 환경 설정을 하는 것부터가 쉽지 않아 추후에 까먹지 않기 위해 블로깅.

### 설치 파일
+ [Node.js][NodeJs]
+ [Git][Git]

### Global Npm
Bash에서 실행될 NodeJs Command 설치.
yo 및 generator는 template 용이라 설치안해도 상관 없음.

		npm install -g gurnt-cli
		npm install -g bower
		npm install -g yo
		npm install -g generator-angular
	
### Git
#### SSH Key 설정

		ssh-keygen -t rsa -b 4096 -C "yongwan.jo@wany.kr"
		clip < ~/.ssh/id_rsa.pub
		
SSH Key 생성 명령어에서는 모두 Enter 넘어가도록 하자.
GitHub의 설정에서 클립보드에 복사된 SSH Key 추가

#### Git Clone
회사는 방화벽으로 ssh 인증이 안되기 때문에 아래와 같이 설정

		git config --global url."https://".insteadOf git://
		git clone git@github.com:yongwan/angular-webapp.git
		bower install --save
		npm install --save

--save 옵션은 bower.json, package.json 업데이트를 할 때 사용

### Grunt
jekyll가 pages.json 파일을 생성.
build 후, yongwan.github.io repository master branch에 angular-webapp의 dist 폴더를 push

		grunt build
		grunt server
		grunt server:dist

참고 URL:
[Generating an SSH key][GitHubSSH], [git:// protocol blocked by company, how can I get around that?][SSH]

[NodeJs]: https://nodejs.org/
[Git]: https://git-scm.com/
[SSH]: http://stackoverflow.com/questions/4891527/git-protocol-blocked-by-company-how-can-i-get-around-that
[GitHubSSH]: https://help.github.com/articles/generating-an-ssh-key/
