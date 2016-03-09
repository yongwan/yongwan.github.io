---
title: ".bind(), .live(), .delegate() and on()"
categories: ["common tech", "jquery"]
tags: ["jquery", "live", "click", "on"]
---

# .bind(), .live(), .delegate() and on()
___

개발하고 있는 source에서 `.click()`이랑 `.live('click', ...)`을 섞어서 사용하고 있더라.
갑자기 문득 어떤 방법이 더 좋은 방법인가 하고 찾아보다가 괜찮은 블로깅을 발견! +_+

[Differences Between jQuery .bind() vs .live() vs .delegate() vs .on()][jQueryDeferences]

자. 그럼. Let's start foot translation.
### Bind
`.click()`은 `.bind('click', ...)`을 단순화한 방법이다.

#### 장점
+ 다양한 브라우저에서 동작한다.  
+ 쉽고 빠르게 사용할 수 있다.
+ `.click()`, `.hover()` 등과 동작을 하면서 더 쉽게 등록할 수 있다.
+ id selector에 대해서 빠르게 event를 등록할 뿐만 아니라 event가 전달 되었을 때 거의 즉시 동작한다.

#### 단점
+ bind()가 selector와 일치하는 모든 element에 같은 event handler를 붙인다.
+ 같은 selector에 대해서 **동적으로 생성된 element에는 동작하지 않는다.**
+ 많은 선택을 처리할 때 성능에 문제가 있을 수 있다.
+ Page load시 성능문제를 야기할 수 있는 첨부가 먼저 실행된다.

### Live
`.live()`는 document의 root에 selector, event 정보와 함께 event handler를 붙인다. 이렇게 함으로서 bubbled(delegated, propagated)된 모든 이벤트에 대해서 하나의 event handler가 동작한다.

#### 장점
+ `.bind()`에 처럼 event handler가 여러 번 등록되지 않고 **한번만 등록**된다.
+ `.bind()`에서 `.live()`로의 변경이 용이하다. 그냥 'bind'를 'live'로 고치면 된다.
+ 정보가 document에 등록되어 있기 때문에 **동적으로 생성된 elements에 대해서도 동작**한다.
+ document ready event 이 전에 이벤트를 등록할 수 있어서 사용하지 않는 시간에 대한 활용을 가능하도록 도와준다.

#### 단점
+ **jQuery 1.7 이 후부터는 폐기**되었기 때문에 단계적으로 code에서 제거하여야 한다.
+ Chaining을 정상적으로 지원하지 않는다.
+ Selection은 document의 event handler로 등록되는 곳에만 사용되기 때문에 기본적으로 버려진다.
+ event가 이미 document까지 delegated되었기 때문에 `event.stopPropagation()`을 사용하는 것은 도움이 되지 않는다.
+ 모든 event과 selector정보가 document에 등록되어 있기 때문에 event가 일어나게 되면 jQuery는 어떤 event handler가 호출되었는지 확인하기 위해 `matchesSelector`를 이용하여 거대한 metadata 저장소를 뒤진다.
+ Event가 항상 document까지 전달되기 때문에, DOM이 sleep된 경우, 성능 문제가 있을 수 있다.

### Delegate
`.live()`와 기능은 비슷하지만 document대신 등록할 element를 지정할 수 있다.

#### 장점
+ **selector와 event정보를 어디에 등록할지 정할 수 있는 option이 존재**한다.
+ selection이 바로 실행되지 않고 root element에 등록되어 사용되어 진다.
+ Chaining을 정상적으로 지원한다.
+ jQuery가 여전히 일치하는 selector와 event정보를 찾아다녀야 하지만 root element를 지정하기 때문에 그 범위는 줄어들 수 있다.
+ selector에 일치하는 DOM이 동적으로 생성되어도 정상적으로 동작한다.
+ document ready event전에 event handler를 등록할 수 있다.

#### 단점
+ `.bind()`에서 `.delegate()`로의 변경을 바로 할 수 없다.
+ `.live()`를 사용하는 것보다는 괜찮지만 `matchesSelector`를 사용하는 해서 검색을 하는 것에 대한 고려가 여전히 필요하다.

### On
jQuery 이 후부터는 `.bind()`, `.live()`, `.delegate()`가 내부적으로 `.on()`을 호출한다.

#### 장점
+ 다양한 event binding에 대해서 통일성을 제공한다.
+ jQeury code를 단순화시키고 method 호출의 단계를 줄일 수 있다. ( 다른 mehod가 `.on()`을 호출하기 때문에 )
+ `.delegate()`의 장점으로 제공하고, 필요하다면 `.bind()` 기능도 제공한다.

#### 단점
+ `.on()`을 어떻게 사용하느냐에 따라 행동이 변경 때문에 혼란을 야기할 수 있다.

### 결론
+ `.bind()`는 너무 비효율적이다.
+ `.live()`는 jQuery 1.7 이상에서 **폐기**되었기도 하지만 **많은 문제**를 가지고 있으니 사용하지 마라.
+ `.delegate()`는 성능이나 동적으로 생성되는 element와 같은 문제를 한방에 해결해준다.
+ `.on()`은 어떻게 사용하는냐에 따라 `.bind()`, `.live()`, `.delegate()`의 역할을 모두 할 수 있기 때문에 **사용의 편리함**을 가져다 준다.
+ **jQuery 1.7 이상의 project에서는 `.on()`을 사용하자**

결국 우리 Project는 사용해서는 안 될 메소드만 불러대고 있었던 것이었다. 허허허.

무언가 구글 번역에서 돌린 듯한 문장을 발견한다면 그건 <del>당신의 착각</del> 내가 이해를 못해서 그냥 직역해 놓은 것.

[jQueryDeferences]: http://www.elijahmanor.com/2012/02/differences-between-jquery-bind-vs-live.html