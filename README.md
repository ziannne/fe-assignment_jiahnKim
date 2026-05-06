프론트 3주차 과제


0. 문제 인식

1. 클래스 이름만 보고 역할을 명확하게 알 수 있는가?

--> 없음. 클래스 이름에 해당 클래스의 역할을 명시하는게 좋다.

2. 스타일 충돌(겹침)이 발생할 가능성은 없는가?

-->  있다.  html 파일 클래스 이름에 바로 "red-text big-text" 같은 스타일 요소를 넣으면,  차후에 css 파일에서 스타일 요소를 적으려고 할 때 스타일 충돌이 발생할 가능성이 있다.  스타일을 변경하기 어렵다.

3. 프로젝트가 커졌을 때 유지보수는 쉬울까?

*유지보수: 기능을 유지하고 성능을 향상하기 위해,  정기적으로 점검하고 기능을 개선시키는 작업

--> 클래스명을 통해 바로 동작을 파악하기 어렵기에, 유지보수가 어렵다.
또한, "red-text big-text"은 특정 스타일만을 정의했기에 재사용성이 낮고 스타일 변경이 어렵다.

4. 이런 방식이 실무에서 문제가 되는 이유를 설명하시오

--> 협업하는 사람이 클래스명을 통해 해당 클래스의 역할을 알기 어렵고,  재사용성이 낮고 수정이 어렵기 때문이다.

 1. 조사 및 정리

1) CSS를 무작정 작성했을 때 생기는 문제

- (예: 중복, 충돌, 유지보수 어려움 등)

: CSS를 설계없이 무작정 작성했을 때의 문제는 크게 3가지 정도가 존재한다. 
유지보수가 어렵다. 0번 코드와 같이 클래스 이름을 너무 자세히 설정하거나 기능을 알 수 없게 설정한 경우 추후에 코드를 수정하기 힘들다.
또한, 불필요한 중복 코드가 생성될 가능성이 크다. 이는 파일 용량의 크기를 키우는 요인이 된다.
마지막으로, 최종적으로 어떤 스타일이 적용될지 예측하기 어렵다.

2) BEM이란 무엇인가

- Block / Element / Modifier 개념 설명
- 예시 포함

: BEM(Block, Element, Modifier)은 CSS 클래스를 명명하는 방법론 중 하나이다. 

Block(블록)은 독립적인 엔티티로 재사용이 가능하다. 예시로는 헤더, 컨테이너, 메뉴 그리고 체크박스가 있다.

Element(요소)는 Block 내부의 구성 요소로 블록이 없으면 의미를 갖지 못한다. 예시로는 헤더 타이틀 메뉴 항목 그리고  리스트 항목이 있다.

Modifier(수정자)는 Block이나 Element의 상태와 행동을 정의한다. 예시로는 비활성화 상태, 체크 상태 그리고 다른 테마가 있다.

BEM의 네이밍 규칙으로는 2가지가 있다.
블록과 요소는 __(언더 2개)로 연결
(블록 or 요소)와 수정자는 --(하이픈 2개)로 연결

BEM 예시: 
HTML:
<div class="menu">
  <button class="menu__item">Item 1</button>
  <button class="menu__item menu__item--disabled">Item 2</button>
</div>

CSS:
.menu { /* block */ }

.menu__item { /* element */ }

.menu__item--disabled { /* modifier */ }

--> menu는 블록/ menu__item은 요소/ menu__item--disabled은 수정자이다.

3) Tailwind CSS는 어떤 방식인가

- Utility-first 개념 설명

: Tailwind CSS는 Utility-First 접근 방식을 따르는 CSS 프레임워크로 미리 정의된 유틸리티 클래스를 조합하여 스타일링하는 방식이다. HTML이 CSS의 스타일링을 대신하는 방식이다.

우선,  여기서 Utility-First는 m-1이나 flex와 같은 유틸리티 클래스를 활용하여 HTML에서 직접 스타일을 적용하는 방식이다.
별도의 스타일 파일을 작성하지 않고, 클래스의 조합을 통해 적용 가능해 유지보수가 용이하고 일관된 디자인 시스템 구축에 유리하다.

2. UI 구조 설계

 본인만의 구조로 재작성할 것:

카드 헤더 
 -상태 뱃지 영역
 -이미지 영역
카드 콘텐츠 영역
 - 학번
 - 이름
 - 학과
 - 한 줄 소개
 -기술 태그 영역(3개)
 -버튼 영역(2개)



3. 구현 (Tailwind CSS)

Tailwind CSS를 사용하여 **자기소개 카드 UI**를 만드세요.

---

*반드시 포함할 요소

- 프로필 이미지 또는 이미지 영역
- 이름
- 한 줄 소개
- 관심 기술 태그 3개 이상
- 버튼 2개 (GitHub, Blog/Portfolio)

---

*필수 조건

아래 Tailwind 기능을 반드시 사용할 것

- flex 또는 grid
- margin / padding
- rounded
- shadow
- hover 효과
- 반응형 클래스 (`sm:`, `md:`, `lg:` 중 1개 이상)

---

주의 사항 (중요)

- 인터넷 UI를 그대로 복사 금지
- 반드시 **자신이 설계한 구조 기반으로 구현**
- 최소 1개 이상 본인만의 요소 추가
(예: 상태 뱃지, 애니메이션, hover 인터랙션 등)

:
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>자기소개 카드</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-black flex items-center justify-center min-h-screen p-6" >
    
    <!-- 카드 컨테이너(카드 전체) -->
    <div class="bg-gray-100 rounded-2xl shadow-lg overflow-hidden transition-all & transform hover:scale-100">

        <!-- 카드 헤더 (배경색 & 상태 뱃지) -->
        <div class="bg-cyan-500 p-6 flex justify-between items-start">
            <!-- 상태 뱃지-->
            <div class="flex items-center gap-2 bg-gray-800/20 px-3 pt-1 rounded-full border border-gray-500">   
                <span class= "w-2 h-2 bg-green-500 rounded-full"></span>
                <span class="text-sm text-white">재학 중</span>
            </div>
             <!-- 이미지 영역(프로필 이미지)-->
             <div class=" w-16 h-16 rounded-full overflow-hidden border-2 border-red-500 flex items-center justify-center">
            <span class=" text-white text-xl text-xs">image</span>
             </div>
         </div> 
        <!-- 콘텐츠 영역(학번, 이름, 전공, 한 줄 소개)-->
        <div class="p-8">
            <h2 class="text-2xl font-bold text-cyan-800 mb-2">32251089</h2>
            <h3 class="text-xl text-cyan-800 mb-1 font-bold">김지안</h3>
            <p class="text-cyan-800 font-semibold">컴퓨터공학과</p>
            <p class="text-gray-600 mt-2 text-sm">프론트엔드 개발자가 되고 싶은 대학생입니다!</p>
            
            <!-- 기술 태그 영역: HTML, CSS, JavaScript -->
            <div class="flex gap-2 mt-4">
                <span class="bg-white text-blue-500 px-3 py-1 rounded-full text-sm">HTML</span>
                <span class="bg-white text-orange-500 px-3 py-1 rounded-full text-sm">CSS</span>
                <span class="bg-white text-pink-500 px-3 py-1 rounded-full text-sm">JavaScript</span>
            </div>

            <!-- 버튼 영역(깃헙, 블로그)=> grid로 반 나눔-->
            <div class="grid grid-cols-2 gap-4 mt-6">
                <!-- 깃헙 버튼 -->
                <a href="https://github.com" target="_blank"
                   class="bg-gray-700 text-white text-center py-3 rounded-lg text-sm font-bold">
                GitHub</a>
                <!-- 블로그 버튼 -->
                <a href="https://blog.naver.com" target="_blank"
                   class="bg-gray-700 text-white text-center py-3 rounded-lg text-sm font-bold">
                   블로그</a>
            </div>
        </div> 
    </div>

</body>
</html>
<img width="356" height="398" alt="image" src="https://github.com/user-attachments/assets/3fe2afe9-b035-4e1c-9778-280f08ff6f64" />




5. 비교 및 회고

1) BEM 방식으로 다시 설계
  
2) Tailwind 사용 경험
   
*편했던 점

전체 코드의 양이 적어서 좋았다. 미리 정의된 설정을 이용할 수 있어서 좋았다.

*불편했던 점

가로로 길게 작성해서 HTML과 CSS파일을 구분해서 사용하는 것보다 가독성이 떨어진다.

*BEM vs Tailwind 차이

- 작성 방식: BEM은  HTML 구조에 맞춰 의미있는 이름을 짓는 반면, Tailwind는 미리 정의된 유틸리티 클래스를 나열하는 방식이다.
- 유지보수 방식: BEM은 HTML은 간결하지만, CSS파일의 양이 많아 수정이 어려울 수 있다. 반면, Tailwind는 수정시, HTML코드에서 직접 고칠 수 있고 CSS파일이 커지지 않는 장범이 있다.
- 장단점 비교:
BEM: 
장점: HTML의 구조가 간결하고 클래스명으로 역할을 파악하기 용이하다.
단점: 클래스명이 길고 이름을 의미있게 지어야 해서 시간이 걸린다. 
CSS파일이 커질 수 있고 HTML과 번갈아 작업해야 해서 번거롭다.

Tailwind:
장점: 개발 속도가 빠르고 스타일 충돌 우려가 없다.
단점: HTML코드가 길고 복잡해 보인다.

