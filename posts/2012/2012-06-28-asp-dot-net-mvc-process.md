---
title: "ASP .NET MVC 프로세스"
categories: [".net", "asp.net mvc"]
tags: ["asp.net mvc", "process", "routing", "defaultcontrollerfactory"]
---

# ASP .NET MVC 프로세스
___

소스에 DefaultControllerFactory를 상속 받아서 이 것, 저 것 로직은 넣는 부분 있어서 그걸 찾아보다가 우선 **MVC의 프로세스부터 명확하게 이해**를 하고 넘어가는 것이 좋을 것 같아 정리.
가장 좋은 Reference는 역시 MSDN

[MVC 응용 프로그램 실행 프로세스 이해(Understanding the MVC Application Execution Process)][MVCProcess]

![MVC 웹 프로젝트의 실행 단계][MVCProcessImage]

우리 코드의 경우 저기 '컨트롤러 만들기' 부분에서 DefaultControllerFactory를 상속받아 첫페이지에서 필요한 Process들(LogOn, Licensing 등)을 살짝 끼워넣어 필터링 하고 있다.

[MVCProcess]: http://msdn.microsoft.com/ko-kr/library/dd381612(v=vs.100).aspx
[MVCProcessImage]: /posts/2012/2012-06-28-asp-dot-net-mvc-process/mvc_process.png