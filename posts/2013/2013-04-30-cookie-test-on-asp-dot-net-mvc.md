---
title: "ASP .NET MVC에서 HttpContext를 이용한 Cookie Test"
categories: [".net", "asp.net mvc"]
tags: [".net", "asp.net mvc", "test", "cookie"]
---

# ASP .NET MVC에서 HttpContext를 이용한 Cookie Test
___

Controller에서 내부에서 Cookie 값을 읽고 써야하는 부분이 필요하게 되었는데,
기존의 코드가 System.Web.HttpContext.Current를 사용하여 Cookie값을 읽어오고 있었다.
그냥 생각없이 긁어 쓰고 나서 Test Project를 만들려고 하니 머시 방법이 없다.
그래서 구글링 ㄱㄱ. 

[Difference between HttpContext.Current and Controller.Context in MVC ASP.NET][ControllerContext]
 
첫번째 답변은 Thread를 따로 만들어 사용하면 Current의 HttpContext와 Controller의 HttpContext는 다를 수가 있다. 하지만 나의 경우는 Thread를 고려할 필요가 없어서 Pass.
두번째 답변을 보면 **HttpContext의 Mocking을 위해서라면 Controller의 HttpContext를 사용**할 것을 이야기 하고 있다.

[ControllerContext]: http://stackoverflow.com/questions/785413/difference-between-httpcontext-current-and-controller-context-in-mvc-asp-net