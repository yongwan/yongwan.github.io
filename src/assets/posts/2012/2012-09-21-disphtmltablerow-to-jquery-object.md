---
title: "DispHtmlTableRow to jQuery object"
categories: ["common tech", "jquery"]
tags: ["jquery", "disphtmltablerow", "closest", "parents"]
---

# DispHtmlTableRow to jQuery object
___

jQuery에서 셀렉트된 체크박스가 있는 Row의 특정 칼럼을 접근해야하는 로직이 필요했다.

헌데 체크박스의 Row를 선택하고 그 위에 있는 n번째의 row를 선택해서 디버깅을 해보면 이 녀석이 jQuery object가 아니라 DispHtmlTableRow로 나타나더라.
이렇게 되니까 jQuery method가 안먹는 것이었다. 이거 어떻게 바꾸지? 하면서 Googling~

이번 건은 꽤나 안나오더라. 결국 나온 결론! `$()`으로 감싸면 된다. 이런 기본적인걸...쳇.
역시 모든 건 기초를 튼튼하게 쌓아야 해.

여튼 아래의 것이 결론.

```javascript
$($(".gridRowSelection:checked").closest("tr")[0]).find("td[column='Remarks']").val("aa");
$($(".gridRowSelection:checked").closest("tr")[0]).find("td[column='Remarks']").text("aa");
```

참고로 `parents()`와 `closest()`의 차이는 위에 있는 모른 부모를 가져오는 것과 위에 있는 가장 가까운 부모를 가져온다는 것.

참고 URL : [Get jQuery object from HTML string][GetJqueryObject]

**[Updated:2013-08-19]**

다른 많은 방법도 있겠지만 굳이 저렇게 번거롭게 변환할 필요없이 아래와 같이 사용하는 것이 더 괜찮은 방법이었을 거 같다.

```javascript
$(".gridRowSelection:checked").closest("tr").first().find("td[column='Remarks']").val("aa");
```

[GetJqueryObject]: http://stackoverflow.com/questions/7017584/get-jquery-object-from-html-string