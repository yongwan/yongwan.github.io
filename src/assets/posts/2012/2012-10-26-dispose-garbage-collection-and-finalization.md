---
title: "Dispose, garbage collection and finalization"
categories: [".net", "csharp"]
tags: ["c#", "dispose", "garbage collection", "finalization"]
---

# Dispose, garbage collection and finalization
___

객체의 생성 및 소멸과 관련해서 수정을 해야할 일이 있어서 공부를 좀 해야겠다 싶어 검색을 하다가 찾은 괜찮은 [포스팅][Dispose]. 이라기 보단 답변.
 
내 수준으로 굳이 번역을 하자면
 
결론 : **Disposal과 Garbage Collection은 전혀 별개의 문제**이다.

+ **using Statement**는 단순히 문법적으로 try/finally 문장을 쉽게 표현한 녀석.
	using안에서 Dispose() 부르던 안부르던 Exception이 떨어지던 안 떨이지던 Dispose()를 항상 부르게 만들어 놓은 녀석.
	그래서 using문 안에 들어가는 객체는 IDisposable이 Implementation되어 있어야 한다.
 
+ **Disposal**은 unmanaged resources(non-memory resources)에 대한 녀석이다.
	UI, 네트워크 접속, 파일 등과 제어되지 않는 제한된 Resource에 대한 핸들링을 위해서 Implementation된다.
 
+ **Garbage Collection**은 단지 Memory에 대한 핸들링이다.
	Garbage Collector는 더 이상 참조되지 않는 객체를 찾아서 Release해주는 역할을 하지만 항상 돌아가는 건 아니다.
 
+ **Finalizer**는 개발자가 Dispose를 명시적으로 해주여야 하는 데 이를 지키지 않았을 때를 대비해서 Unmanaged Resources를 Release하기 위해 작성한다.
	하지만 적상적인 패턴으로 개발을 한 경우라면 Finalizer는 실행되지 않을 것이다.
 
+ **Setting a variable to null**은	Garbage Collection으로 인해서 null로 asign하는 것은 의미가 없다.
	지역변수에서는 JIT(?)가 충분히 똘똘하기 때문에 variable을 추후에 사용할지 안 할지에 대해서 판단할 수 있다.
	멤버변수(전역변수)일 때도 거의 필요없기는 하지만 null로 세팅하는 것이 필요할 때도 있다.
 
대부분의 경우 Finalizer의 Implementation은 필요가 없다.

추가 참고 : Connection은 가장 늦게 Open해서 가장 빨리 Close해라. 제한된 Resource이기 때문에.

[Dispose]: http://stackoverflow.com/questions/574019/calling-null-on-a-class-vs-dispose