---
title: "Windows 2008 서버에서 ASP.NET Profiling"
categories: [".net", "asp.net"]
tags: ["profiling", "asp.net", "asp.net mvc", "visual studio", "windows 2008", "vsp 7008"]
---

# Windows 2008 서버에서 ASP.NET Profiling
___

요즘은 Performance Test 때문에 몇몇 팀원이 바쁘다.
나는 다행히(?)도 그쪽 일을 하고 있지 않아 한가한데 여차저차해서 Visual Studio Profiling 기능이 팀의 이슈가 되었다.
사실 예전에 한번 훑어 봤던 내용이기는 한데 한 번도 해보지를 않아서 이번 기회에 한 번 경험해봤다.

[Visual Studio에서의 프로파일링][AnalyzingApplicationPerformance]은 권차장님께서 이미 성공하셨다.
하지만 나는 호스트에는 VS와 DB가 Application + Web은 VM에 설치되어 있기 때문에 다른 방법이 필요했다.
해서 내 환경에 맞게 Remote Machine에 대한 Profiling을 찾아보던 중에 [Stand-Alone으로 Profiling][StandAloneProfiling]을 하는 방벙을 MSDN에서 찾게 되었다.
그리고 그와 연결되어 있던 [Command-Line Profiling of ASP.NET Web Applications][StandAloneASPNETProfiling].

+ Configuration

	+ 우리는 아직 Visual Studio 2010을 사용하고 있기 때문에 [Visual Studio 2010 성능 도구 서비스 팩 1][VS2010PerformanceTool]을 다운받고 설치.
	+ 환경변수에 명령어 PATH설정  
		`set PATH=%PATH%;"C:\Program Files (x86)\Microsoft Visual Studio 9.0\Team Tools\Performance Tools"`
	+ 심볼 서버 설정을 위해 \_NT\_SYBBOL\_PATH를 환경 변수에 등록  
		`set _NT_SYBBOL_PATH=symsrv*symsrv.dll*c:\localcache*http://msdl.microsoft.com/download/symbols`  
		*c:\localcache*에 Compile시 생성된 PDB파일들을 Copy해야한다. [How to: Reference Windows Symbol Information][SymbolServer]

+ 실행

	+ `VSPerfASPNETCmd websiteUrl`

+ Error

	과감하게 실행하고는 아래와 같은 Error가 나타났다. 쳇.
> 오류
>
>	VSP 7008: ASP.net 예외: "웹 사이트 메타베이스에 예기치 않은 정보가 들어 있거나 메타베이스에 액세스할 수 있는 권한이 없습
	니다. IIS 메타베이스에 액세스하려면 로컬 컴퓨터의 Administrators 그룹 멤버여야 합니다. 따라서 로컬 IIS 웹 사이트를 만들
	거나 열 수 없습니다. 파일이 있는 폴더에 대해 읽기, 쓰기 및 수정 권한이 있으면 해당 폴더를 가리키는 파일 시스템 웹 사이트
	를 만들어 계속할 수 있습니다."

+ 해결방법

	[Tip: Fixing VSPerfASPNetCmd metabase errors][MetabaseErrorFix]에 의하면 IIS의 Feature를 Turn On하면 된다고 하는데 Windows 2008은 Feature가 서버 관리자에 있다.
	
	+ IIS 6 Scripting Tools
	+ IIS 6 WMI Compatibility
	+ IIS Metabase and IIS 6 configuration compatibility
	+ ASP.NET
	+ Windows Authentication
	
	![서버 관리자][ServerManager]
	![역할 서비스 추가][AddRoleService]

+ 결과

	+ 결과로 떨어지는 .vsp는 Visual Studio에서 보면 야무치게 잘 나온다.
	+ Visual Studio로 Profiling을 했을 때는 Source까지 연결 되어 있던데 그 것까진 안된다.
	+ 결과로 떨어지는 csv의 한글은 Excel에서 깨져서 보인다. 응급처치(?)는 [여기][ExcelKorean]
	+ 괜찮은 한국어 포스팅은 [여기][StandAloneProfilingKor]
	+ Profiling중에 다른 Command를 사용해서 확인하고 싶은게 있다면 /NoWait Option을 사용하면 된다.
	
[AnalyzingApplicationPerformance]: http://msdn.microsoft.com/en-us/library/z9z62c29(v=vs.100).aspx
[StandAloneProfiling]: http://msdn.microsoft.com/en-us/library/dd255411(v=vs.100).aspx
[StandAloneASPNETProfiling]: http://msdn.microsoft.com/en-us/library/dd255401(v=vs.100).aspx
[VS2010PerformanceTool]: http://www.microsoft.com/ko-kr/download/details.aspx?id=23205
[SymbolServer]: http://msdn.microsoft.com/en-us/library/89axdy6y(v=vs.100).aspx
[MetabaseErrorFix]: http://blogs.msdn.com/b/profiler/archive/2010/07/23/tip-fixing-vsperfaspnetcmd-metabase-errors.aspx
[ServerManager]: /posts/2013/2013-08-09-profiling-error/WindowsFeatureOn2008_001.png
[AddRoleService]: /posts/2013/2013-08-09-profiling-error/WindowsFeatureOn2008_002.png
[ExcelKorean]: http://blog.daum.net/sualchi/13720149
[StandAloneProfilingKor]: http://plantrue.tistory.com/24