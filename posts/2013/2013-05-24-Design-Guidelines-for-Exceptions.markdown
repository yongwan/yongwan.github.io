---
title: "Design Guidelines for Exceptions"
categories: [".net", "csharp"]
tags: ["c#", "exception"]
---

# Design Guidelines for Exceptions
___

ASP.NET MVC에서 Exception 처리와 표현에 대해서 토의가 있었지만 현재까지는 결론없이 끝났다.
결국은 UK의 결정에 따라 가겠지만 일단 우리 내부적으로 어떻게 해야할 지 그리고 그 근거는 어디에 있는지 이야기할 필요가 있다고 생각되는 한 편. 기본을 제대로 이해하지 못하고 무턱대고 삽질하는 것보다 기본을 먼저 아는 것이 필요하겠다 싶어서 예전에 봤었지만 다시한 번 정독.

제일 필요한 부분이 [Catching and Throwing Standard Exception Types][ExceptionTypes]. [한글도 지원][ExceptionTypesKor]을 해주지만 번역이 이해하는 게 더 어렵다;; 내가 번역하려고 하면 더더욱 어렵다;;;

#### Exeption, SystemException
+ Eception 또는 SystemException을 던지지 마라.
+ re-throw를 의도한 것이 아니라면 Exception, SystemException을 Catch하지 마라. ( Log를 쓰거나 할 경우? )
+ top-level exception handler(Exception의 마지막 layer, MVC의 경우 Controller)가 아니라면 Exception 또는 SystemException을 Catch하지 마라.
 
#### ApplicationException
+ ApplicationException 말고 Exception을 상속 받아라.

#### InvalidOperationException
+ property의 setter또는 method를 부를 때 객체의 상태가 행동을 하는데 적합하지 않다면 InvalidOperatonException을 사용하여 던져라.
 
#### ArgumentException, ArgumentNullException and ArgumentOutOfRangeException
+ Argument가 적절하지 않는 녀석이 왔다면 ArgumentException 또는 그 것을 상속받은 Exception을 던져라. 가능하면 가장 하위의 Exception을 사용.
+ ParamName property에 값을 넣어라.
+ Property의 setter에서는 ParamName으로 "value"를 사용해라.
```cs
set
{
	if(value == null)
	{
		throw new ArgumentNullException("value");
	}
	address = value;
}
```
+ public API에서 NullReferenceException, AccessViolationException, InvalidCastException 또는 IndexOutOfRangeException을 명시적 또는 암시적으로 던지지 못하게 하라. 이러한 Exception들을 던지는 것을 피하기 위해서 Argument들을 check하라.

#### StackOverflowException, OutOfMemoryException, ComException, SEHException and ExecutionEngineException.
+ 위 Exception들은 CRL을 통해서만 던지게 되어 있으니까 명시적으로 던지지마라. 
+ StackOverflowException과 SEHException은 명시적으로 Catch하지 마라.
 
<del>포스팅이 조잡하군.</del>

[ExceptionTypes]: http://msdn.microsoft.com/en-us/library/ms229007(v=vs.100).aspx
[ExceptionTypesKor]: http://msdn.microsoft.com/ko-kr/library/ms229007(v=vs.100).aspx