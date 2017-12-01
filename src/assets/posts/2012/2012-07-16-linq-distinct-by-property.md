---
title: "[LINQ] 프로퍼티를 이용한 중복 제거 ( Distinct by property )"
categories: [".net", "csharp"]
tags: ["c#", "linq", "distinct", "프로퍼티", "중복제거"]
---

# [LINQ] 프로퍼티를 이용한 중복 제거 ( Distinct by property )
___

특정 프로퍼티(property)를 대상으로 중복을 제거해야 하는 데 어떻게 하면 LINQ를 이용해서 할 수 있을까.
나름 생각한 것이 프로퍼티만 뽑아서 중복제거 후에 원래의 List와 Join을 하는 방법이었는데 이게 안 먹더라.
( 아직도 왜 안먹는지 이유를 모르겠다. ㅡㅡ; )
역시 안될 때는 Googling~

그래서 찾아낸 것이 [Linq Distinct on a particular Property][LinqDistinct].
아래 세가지 방법 중 하나를 선택해서 해결할 수 있다.

+ Extention method를 사용
+ Group By를 사용
+ Where / Any 를 복합 사용

나는 Group By를 이용해서 해결!!

[LinqDistinct]: http://stackoverflow.com/questions/489258/linq-distinct-on-a-particular-property