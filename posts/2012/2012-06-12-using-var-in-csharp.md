---
title: "C# - var 키워드의 사용"
categories: [".net", "csharp"]
tags: ["c#", "var"]
---

# C# - var 키워드의 사용
___

UK와 code review를 서로 하고 있는데 UK의 Comment에서 var keyword를 사용하지 말라는 언급이 있어서 Googling. 과연? 왜? 어떤 경우에?

일단 MSDN : [암시적으로 형식화된 지역 변수(Implicitly Typed Local Variables)][MSDN_var]

위 페이지의 마지막에 보면 아래와 같은 언급이 있다.


	그러나 var을 사용하면 다른 개발자가 코드를 이해하는 것이 더 어려워질 수 있습니다. 이런 이유로 C# 문서에서는 일반적으로 필요한 경우에만 var을 사용합니다.
	
	However, the use of var does have at least the potential to make your code more difficult to understand for other developers. For that reason, the C# documentation generally uses var only when it is required.


머 결국은 **누군가와 함께 개발을 한다면 필요한 경우에만 var를 사용**하는 것이 좋을 거라는 이야기.

조금 더 괜찮은 포스팅이 있어서 소개*(라고는 하지만 Jeff Atwood를 까는 느낌이 많음.ㅋ)*

[C# 3.0′s var keyword: Jeff Atwood gets it all wrong][richarddingwall]  
**[Updated : 2013-08-23]**  
*링크 깨져서 블로그에 들어가보니 포스팅이 지워졌다;; 그래서 그냥 블로그로 링크 대체*

위 링크의 내용 중에 MSDN의 var page에 가면 과도한 var의 사용은 어쩌고 저쩌고 하는 내용이 있는데 실제로 링크에 가면 없다.
링크의 링크에는 혹시 있을지 모르지만. 근데 그 내용은 어쩐지 믿음직하다.

댓글들도 다양한데 인상깊은 댓글이 있다면 

	너처럼 다른 사람을 까서 유명해지려고 하는 사람의 글은 싫다. 다른 사람의 언급없이 니 의견만 말했었어야 했다.

UK는 아무래도 Anonymous Type이 아니면 var를 사용하지 않았으면 하는 것 같다.
나도 동의는 하지만 명시적으로 new를 이용한 object 생성이 있다면 그 때는 var을 사용해도 무방하다고 본다.
다형성이 문제가 되는 코드라고 한다면 물론 명시적으로 작성해주는 것이 맞다고 생각하고.

결국은 팀에 통일된 룰이 있고 그 룰을 팀원들이 이해하고 있다면 그 걸이 정답이 아닐까 생각한다.

[MSDN_var]: http://msdn.microsoft.com/ko-kr/library/bb384061.aspx
[richarddingwall]: http://richarddingwall.name/