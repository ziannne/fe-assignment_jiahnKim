1. 프로젝트 개요

React를 활용하여 쇼핑몰 웹페이지를 구현!

상품 목록 조회, 상품 상세 조회, 리뷰 조회 기능을 구현했으며,
json-server를 이용해 REST API 형식으로 데이터 관리까지 진행

사용자는 상품 목록 페이지에서 원하는 상품을 선택할 수 있고,
상품 상세 페이지에서 상품 정보를 확인할 수 있다. 리뷰는 아직 불러오지 못 했다.



2. 사용 기술

React
Vite
React Router
json-server
CSS Modules



3. 주요 기능

a. 상품 목록 페이지
b. 전체 상품 목록 출력
c. 카테고리별 상품 필터
d. 상품 클릭 시 상세 페이지 이동
e. 상품 상세 페이지
f. 상품 이미지 및 상세 정보 출력
g. 상품 리뷰 확인
h. 구매 버튼 구현
i. 로딩 및 에러 처리



4. 프로젝트 구조
src
 ├─ components
 │   ├─ Layout
 │   ├─ Home
 │   └─ ProductDetail.jsx
 │
 ├─ hooks
 │   ├─ useFetchProducts.js
 │   ├─ useFetchProduct.js
 │   └─ useFetchReview.js



#components
화면 UI 관련 컴포넌트 관리

#hooks
API 호출 및 데이터 패칭 로직 관리



5. 데이터 처리 방식

상품 데이터와 리뷰 데이터는 json-server를 통해 불러옴.
데이터 요청 로직은 커스텀 훅으로 분리하여 관리함.

각 훅에서는:

데이터 상태
로딩 상태
에러 상태

를 함께 관리하도록 구현



6. 실행 주소

http://localhost:5177



7. 실습하면서 어려웠던 점

 1)파일이 많아 관리하기 어려웠다.
 2) 렌더링 타이밍으로 인해 리뷰를 불러올 수 없었다.