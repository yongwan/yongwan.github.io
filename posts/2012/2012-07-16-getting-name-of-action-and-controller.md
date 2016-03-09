---
title: "View에서 Controller와 Action 이름 가져오는 방법"
categories: [".net", "asp.net mvc"]
tags: ["asp.net mvc", "name", "action", "controller", "view"]
---

# View에서 Controller와 Action 이름 가져오는 방법
___

Partial View에서 Action 이름을 가지고 UI를 그리는 로직을 만들어야 하는데.
`this.Request.Path`는 왠지 나이스하지 않은 방법인 거 같아서 구글링.

[Getting the name of the controller and action method in the view in ASP.Net MVC][GetNameOfAction]

```cs
<%= ViewContext.RouteData.Values["Controller"] %>
<%= ViewContext.RouteData.Values["Action"] %>
```

역시나 이렇게 나이스한 방법이 있었다.

[GetNameOfAction]: http://stackoverflow.com/questions/1083774/getting-the-name-of-the-controller-and-action-method-in-the-view-in-asp-net-mvc