---
title: "IE9에서 Table의 한 Row에서 특정 Cell의 Offset이 달라지는 현상"
categories: ["common tech", "jquery"]
tags: ["jquery", "ajax", "html", "table", "offset", "ie9"]
---

# IE9에서 Table의 한 Row에서 특정 Cell의 Offset이 달라지는 현상
___

조건 : 브라우저 모드 - IE9, 문서 모드 - IE9

이 경우 html을 이용해서 table을 그리면 희한하게 특정 row의 특정 cell부터 offset이 달라지는 현상이 있었다.
더 환장하게 만드는 거는 다른 User로 Login을 하면 정상적으로 보인다는 것.
Data의 Property 값을 변경하면 또 정상적으로 보이기도 하고.
머 이런 경우가 있나 싶어서 Googling~

[IE9 table has random rows which are offset at random columns][weirdoffset]

내가 발견한 현상이 Link Page의 Sample과 정확하게 같았다. 유레카.
원인은 IE9에서 writespace에 대한 parsing을 정상적으로 하지 못한 다는 것.
그래서 적용한 방법이 링크의 댓글들 중 jquery plug-in으로 되어 있는 녀석.

```javascript
jQuery.fn.htmlClean = function() {
	this.contents().filter(function() {
		if (this.nodeType != 3) {
			$(this).htmlClean();
			return false;
		}
		else {
			return !/\S/.test(this.nodeValue);
		}
	}).remove();
	return this;
}
```

Web Browser에 따라서 고려해야할 부분이 산더미 같은데 IE Version별로도 고려해야할 게 산더미다.

**Updated**

위 방법은 모든 Contents를 뒤져야하는 관계로 Performance에 Issue가 발생할 가능성이 있다.
해서 결국은 partial view html의 whitespace를 직접 제거해서 사용하는 방향으로 수정되었다.

[weirdoffset]: http://stackoverflow.com/questions/7267014/ie9-table-has-random-rows-which-are-offset-at-random-columns