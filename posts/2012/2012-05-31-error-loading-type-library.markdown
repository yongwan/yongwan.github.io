---
title: "Error loading type library/DLL. (Exception from HRESULT: 0x80029C4A (TYPE_E_CANTLOADLIBRARY))"
categories: ["applications"]
tags: ["error", "0x80029C4A", "TYPE_E_CANTLOADLIBRARY"]
---

# Error loading type library/DLL. (Exception from HRESULT: 0x80029C4A (TYPE_E_CANTLOADLIBRARY))
___

다른 컴퓨터에서는 정상적으로 돌아가는 데 유독 DEMO를 하려는 Machine에서만 아래와 같은 Error가 났다.

	Error loading type library/DLL. (Exception from HRESULT: 0x80029C4A (TYPE_E_CANTLOADLIBRARY))

시스템 문제인 줄 알고 하루 반나절을 미친듯이 이리저리 뒤적거렸었는 데 결국은 Googling으로 해결.

몇몇 포스팅에서는 .NET framework가 정상적으로 설치가 되지 않아서 인 경우도 있고 했는데 나의 경우는 그 보다는 이전 시스템의 Garbage Data가 있어서 문제였었다.

해결한 방법은 결국 [Process Monitor][ProcessMonitor]을 이용해서 Error를 추적.
특정 COM DLL의 Path가 x64와 x32 모두에 세팅이 되어 있고 값은 x64의 값을 읽는데 여기 있는 값이 이전 시스템이 적어 놓은 것이었다는 것.
제거시에 정상적으로 제거되지 않았던 듯하다.
Googling으로 찾은 Posting에는 [FileMon][FileMon], RegMon이라는 Utility를 사용하라고 되어 있는데 이 링크를 타서 가보면 알겠지만 이 Utility가 Process Monitor로 바뀌었다고 되어 있다.

여튼 이 Utility 좀 짱인듯. 이걸로 Process Filter/Capture해서 Error나는 부분을 확인하니까 **COM DLL이 엄한 곳을 읽려고 시도하다가 FAIL 나는 것을 확인**해서 해결!!

[ProcessMonitor]: http://technet.microsoft.com/en-us/sysinternals/bb896645
[FileMon]: http://technet.microsoft.com/en-us/sysinternals/bb896642.aspx