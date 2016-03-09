---
title: "Cross-Site Request Forgery(CSRF) in ASP.NET MVC"
categories: [".net", "asp.net mvc"]
tags: ["cross site request forgery", "csrf", "asp.net mvc"]
---

# Cross-Site Request Forgery(CSRF) in ASP.NET MVC
___

한국어로는 [사이트 간 요청 위조][CSRF_kor].
정상적으로 생성된 쿠키를 이용해서 특정 사이트를 공격하는 방법.
이 때문에 Request를 하는 User를 확인하는 과정이 필요한데 ASP.NET MVC에서 이를 확인하는 API가 존재.

그거슨 AntiForgeryTokenHelper. 아래 사이트에 자세하게 잘 나와있다.

[Prevent Cross-Site Request Forgery (CSRF) using ASP.NET MVC’s AntiForgeryToken() helper][AntiForgeryTokenHelper]

간단하게 말하면 aspx의 **form에는 [Html.AntiForgeryToken()][MSDN_AntiForgeryToken]**을 사용하고
```cs
<% using(Html.Form("UserProfile", "SubmitUpdate")) { %>
    <%= Html.AntiForgeryToken() %>
    <!-- etc -->
<% } %>
```

Controller의 해당 **POST action에는 [ValidateAntiForgeryTokenAttribute][MSDN_ValidateAntiForgeryToken]**를 사용하면 된다.
```cs
[HttpPost]
[ValidateAntiForgeryToken]
public ViewResult Submit()
{
    // etc
}
``` 

이렇게 공격하겠다고 생각한 해커도 대단한 듯;;

참고 : [Cross-Site Scripting(XSS)][XSS_kor]

[CSRF_kor]: http://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EA%B0%84_%EC%9A%94%EC%B2%AD_%EC%9C%84%EC%A1%B0
[AntiForgeryTokenHelper]: http://blog.stevensanderson.com/2008/09/01/prevent-cross-site-request-forgery-csrf-using-aspnet-mvcs-antiforgerytoken-helper/
[MSDN_AntiForgeryToken]: http://msdn.microsoft.com/en-us/library/system.web.mvc.htmlhelper.antiforgerytoken(v=vs.108).aspx
[MSDN_ValidateAntiForgeryToken]: http://msdn.microsoft.com/en-us/library/system.web.mvc.validateantiforgerytokenattribute(v=vs.108).aspx
[XSS_kor]: http://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EA%B0%84_%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8C%85 