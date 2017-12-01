---
title: "aspx에서 LINQ extention method의 intelligence가 작동하지 않을 때"
categories: ["applications", "visual studio"]
tags: ["visual studio", "linq", "extention method", "intelligence"]
---

# aspx에서 LINQ extention method의 intelligence가 작동하지 않을 때
___

ASP .NET MVC를 .NET 4.0 project로 업데이트를 한 후에 page(aspx, ascx)에서 LINQ method의 intelligence가 안되면서 아래와 같은 error가 났다.
하지만 build도 성공하고 작동도 정상적으로 해서 눈치채지 못하고 있다가 늦게나마 이부장님이 발견하셨음;;;

  'System.Collections.Generic.IEnumerable<T>' does not contain a definition for 'Count' and no extension method 'Count' accepting a first argument of type 'System.Collections.Generic.IEnumerable<T>' could be found (are you missing a using directive or an assembly reference?)

Googling을 해보았지만 해결책을 찾는데는 실패.
구신 권차장님께서 Googling을 하시더니 해결 방법을 찾으셨다.

[Razor template editing in Visual Studio 2010: why all the type inference errors?][VS2010_Intelligence_001]

[Why am I getting 'One or more types required to compile a dynamic expression cannot be found.'?][VS2010_Intelligence_002]
 
위 링크의 마지막 답변이 우리 케이스의 해결책.
아래와 같이 targetFramework를 설정하니까 error가 없어졌다! BINGO!

```html
<compilation debug="true" targetFramework="4.0">
  <!-- ... -->
</compilation>
```

[VS2010_Intelligence_001]: http://stackoverflow.com/questions/8347120/razor-template-editing-in-visual-studio-2010-why-all-the-type-inference-errors
[VS2010_Intelligence_002]: http://stackoverflow.com/questions/7115055/why-am-i-getting-one-or-more-types-required-to-compile-a-dynamic-expression-can/7142200#7142200