---
title: "Disable text selection for SVG"
categories: ["common tech", "svg"]
tags: ["svg", "disable text selection", "글자선택기능방지"]
---

# Disable text selection for SVG
___

문득 SVG파일에다가 WaterMark를 동적으로 넣어햐 하게 되었다.
간단하게 Status에 따른 WaterMark를 넣어야 하는데 어떻게 저떻게 구글링을 해서 Water Mark넣는 데는 성공!

근데 Water Mark가 SVG의 text element로 되어 있으니 워터마크에 마우스를 갖다대니 Text Selection 기능이 활성화 되는 것이 아닌가!
워터마크란 본디 뒤에서 흐릿하게 존재해야 하는 놈이거늘...!
그래서 찾아보니 [SVG에서 text는 기본적으로 Selection이 가능][SvgTextSelection]하도록 되어 있다고 한다.

그것을 Disable 하는 기능을 Googling하니 잘 안나오더라.
그러다가 찾은 단서가 [여기][DisableTextSelection]!
댓글을 보면 `pointer-events=none`이라는 문구가 나오는 데 요놈을 사용하니까 된다아아아~.
[W3C의 문서][PointerEvents]를 참조하면 더 자세한 내용을 알수가 있다.

```html
<text pointer-events=none>AAA</text>
```

머 이런식.

[SvgTextSelection]: http://www.w3.org/TR/SVG/text.html#TextSelection
[DisableTextSelection]: http://tech.groups.yahoo.com/group/svg-developers/message/42866
[PointerEvents]: http://www.w3.org/TR/SVG/interact.html#PointerEventsProperty