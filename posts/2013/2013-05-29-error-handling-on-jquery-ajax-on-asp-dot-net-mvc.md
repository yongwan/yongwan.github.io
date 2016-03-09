---
title: "ASP.NET MVC + jQuery AJAX 에서의 Error Handling"
categories: [".net", "asp.net mvc"]
tags: ["asp.net mvc", "jquery"]
---

# ASP.NET MVC + jQuery AJAX 에서의 Error Handling
___

자. 우리 팀에서 결론 없이 무한루프를 돌고 있는 이야기를 시작해야겠다.
안타깝게도 결론은 UK팀에서 내겠지만.

+ Error 처리의 경우 UX 관점에서 어떤 경우 어떻게 보여줄 것인가에 대한 것이 우선 정의되어 있어야 개발자가 그 경우에 따라 개발이 가능하겠다.

+ 우리 제품은 4가지의 방법으로 표현이 가능하도록 되어 있는데 UX 측면에서만 보자면
	+ CRUD중 R을 제외한 경우 실행하기 전 Domain Model에서 자체 Validation을 제공하고 있고 이 결과(Validation Results)를 ASP.NET MVC의 ModelSatate에 넣어서 ValidationSummary()를 이용해서 보여준다.
	+ CRUD중 R의 경우 값은 정상적이지만(즉, 그 View를 표현할 수 있는 충분한 Data를 읽어왔지만) Data의 Status에 따른 warning을 보여주어야 할 경우 ViewModel에 Message property를 추가 및 사용하여 View에 Icon과 함께 이쁘게 보여준다.
	+ Exception의 생겼을 경우. 즉, CRUD에서 개발자가 생각하지 못했던 Exception(e.g. user가 정상적인 process를 거치지 않고 db를 업데이트하여 data가 정상적이지 않을 때 또는 Defect)이 발생하게 되면 ASP.NET MVC의 HandleErrorAttribute + Error.aspx Page를 이용해서 보여준다.
	+ jQuery AJAX를 이용한 Exception의 출력은 jQuery Dialog를 이용해서 pop-up의 형태로 보여준다.

+ 일반적인 경우는 위의 마지막을 제외한 방법으로 해결이 가능하지만, 앞으로 Exception을 jQuery Dialog를 가지고 pop-up으로 보여주는 것은 사용하지 않기로 했다. UK의 결정.

+ AJAX의 CRUD(GET, POST)의 경우 모두 위의 첫번째, 두번째 방법으로 해결이 되지만 Exception은 어떻게 해결해야할지가 관건이 된다. 세 번째 방법으로 Error를 보여줄 경우 그 Page안에 Main Page로 가는 링크가 보여지고 AJAX의 정상적인 결과는 Partial View인데 Exception은 전체 PAGE가 되는 상황이 발생하기 때문이다.

+ 이 걸 해결하는 방법은 생각외로 간단하다. Error View로 사용할 Partial View \( e.g. MyError.ascx \)를 만들어서 Partial View의 Action에 \[HandleError\]를 사용하면 된다.

+ 이제 조금 더 깊게 들어가서. AJAX로 파일을 업로드하기 위해서 쓰는 [jQuery Form Plugin](http://jquery.malsup.com/form/)이 있다. 이 플러그인만 그런지 모르겠지만 이 녀석은 c#에서 error를 throw하더라도 error handler로 가지 않고 success handler로 가게끔 되어 있다.

+ 원인은 Plugin이 response code를 어떤 경우에도 조작하지 않기 때문이라고. 아직 레벨이 낮아서 Plugin Source를 봐도 잘 이해하지는 못하겠다. 여튼 이런 경우에 Response Status를 200이 아닌 다른 녀석으로 Return하거나 특정 상태를 return해서 success에서 handling하는 방법이 있다고 한다.

+ Googling해서 찾은 가장 괜찮은 LINK는 요기 : "[jquery form plugin, no error handling](http://stackoverflow.com/questions/3995355/jquery-form-plugin-no-error-handling)"