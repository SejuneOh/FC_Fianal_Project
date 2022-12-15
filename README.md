# FinalProject (Team4)

<img src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/JS-yellow?style=for-the-badge&logo=javascript&logoColor=white"><img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"><img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"><img src="https://img.shields.io/badge/CRA-09D3AC?style=for-the-badge&logo=Create React App&logoColor=white">

## 기획목표

- 꾸다 구독쇼핑 렌탈 계약 프로세스UX/UI 개선 및 개발
- 렌탈 주문 관리, 상품 관리, 배송 관리 등 백오피스 리뉴얼

### 제작기간 : 220623 ~ 220722 

## Team 소개

### UI/UX 
- 이지수
- 문혜정
- 장희연 

### FE(Front-End)
- [오세준](https://github.com/SejuneOh)
- [최다현](https://github.com/oching-choi)
- [조주선](https://github.com/jusunjo)
- [유아름](https://github.com/youahleum)
- [김영희](https://github.com/YhKIM0211)




## Stack
- CRA(Create-React-App)
- Git, Github
- Html
- CSS
- JS




## Communication
- Slack
- Jira
- Notion
- Zeplin
- Figma

## Library
- Axios
- Styled-Components
- React-Router-Dom
- react-daum-postcode
- Redux-toolkit
- React-datePicker
- Date-fns
- Read-excel-file, xlsx
- Ckeditor5
- Mongoose(Mongo DB)

--- 

## 요구사항


셰어라운드는 ‘꾸다’ 를 운영합니다.  
서비스 1. 물건 빌리는 앱 : 전국 프리미엄 대여샵의 대여 물건 정보와 대여 예약 서비스를 제공  
서비스 2. 구독 쇼핑 : 구독하듯이 원하는 기간 동안 정기결제할 수 있는 렌탈형 이커머스  


프로젝트 상세 요구사항

1. 웹&모바일(반응형) : 계약 프로세스
1) 렌탈 계약 정보 입력 페이지 : 주문자명, 배송지 검색입력, 렌탈 기간 선택 등 해당 페이지 리뉴얼
2) 렌탈 계약 확인 페이지 : 주문 내용 확인 및 정보제공 동의 내용 페이지 구현
3) 전자계약서 작성을 위한 외부 API 연동 기능 구현
4) 계약 승인 및 거절 페이지 화면 구현

2. 백오피스(마스터용/판매자용)
2-1. 꾸다 마스터용
1) 주문 관리 : 주문 상품 확인, 배송주소 확인, 배송 정보 입력(발송 처리), 배송 조회 화면 및 기능 구현
2) 상품 관리 : 상품 등록, 수정, 일괄 등록/수정, 렌탈료 조회 API연동 기능 구현
3) 고객 관리 : 고객 정보 조회 및 수정 기능 구현

4) 로그인/권한 기능 구현


2-2. 판매자용
1) 주문 조회 : 주문 상품 확인, 배송주소 확인, 배송 정보 입력(발송 처리), 배송 조회
2) 상품 등록/수정 등 기능 구현
3) 로그인 기능

--- 


### API 명세서 

-  관리자 등록 
```txt
/api/master/administrators
```
-  관리자 로그인 
```txt
/api/master/auth
```
-  판매자 회원가입
```txt
/api/vendor/auth/register
```
-  판매자 로그인 
```txt
 /api/vendor/auth
```

---

## 기능

### 로그인 및 회원가입
<img width="880" alt="login" src="https://user-images.githubusercontent.com/103201530/180261584-78ac450d-9ff6-4173-b425-f625f5cf4519.png">

- 판매자와 관리자 로그인
- 회원 가입시 유효성 체크


### 로그인 및 권한에 따른  Header 구분 및 접근 제한


- 관리자 Header
![MasterHeader](https://user-images.githubusercontent.com/103201530/180258397-4a035081-79f0-44ed-8959-f04bcbf852ad.png)

- 관리자 메인페이지
![MasterMain](https://user-images.githubusercontent.com/103201530/180260727-5268da47-daa3-428c-8732-c47324f86868.png)

- 판매자 Header
![VendorHeader](https://user-images.githubusercontent.com/103201530/180258404-e778ae69-03b5-49ad-b13d-0bc09476c125.png)

- 판매 메인화면 
![VendorMain](https://user-images.githubusercontent.com/103201530/180260534-ef51cf64-8ce5-4d71-9e9b-5f99c7e8462a.png)

로그인 여부 및 권한에 따른 메뉴 접근 제한 구현


### 고객 상품 결제 서비스 리뉴얼

<img width="959" alt="결제리뉴얼" src="https://user-images.githubusercontent.com/103201530/180260947-a761800f-41ff-425f-80ed-490075dd3e29.png">

- 미디어 쿼리를 이용한 반응형 화면
- 기존 이니렌탈 api를 이용한 결제 서비스 화면 리뉴얼



### 주문조회 및 상세조회
<img width="1081" alt="order" src="https://user-images.githubusercontent.com/103201530/180262306-2bea5685-aa57-497c-84e7-8c8500437d36.png">

### 상품조회 및 등록
<img width="1030" alt="product" src="https://user-images.githubusercontent.com/103201530/180262334-cd6c02df-a8b1-4e2a-bfba-beb832409efe.png">

### 파트너 검색 및 파트너 등록화면
<img width="943" alt="panter" src="https://user-images.githubusercontent.com/103201530/180262343-85f24cc7-e674-4fbd-b422-0b2a4461f7f7.png">


```txt
- 다중키워드를 사용한 검색 
- 날짜를 이용한 검색 및 데이터 표시
- 필요 데이터 관련내용 수정
```


### Project Team 유의사항

- Commit Messag 규칙 준수(feat, fix, docs...)
- 하루의 할 일 Issue 등록 후 작업 진행
- 기능 위에 주석으로 작성자, 함수 기능 설명 작성
- 함수 앞 func 키워드 사용
- PR 요청 시 팀장은 자다가 일어나서 받기..
