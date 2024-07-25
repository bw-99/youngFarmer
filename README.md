# 🌾 농산물 산지직송 프로젝트

## 1. 소개글
본 프로젝트는 신선한 농산물을 산지에서 소비자에게 직접 전달하기 위한 웹 애플리케이션입니다. 소비자들은 농부들이 재배한 다양한 농산물을 빠르게 받아볼 수 있습니다. 이 프로젝트는 React와 Redux를 사용하여 프론트엔드를 구축하였으며, Firebase를 통해 백엔드 및 데이터 관리를 수행합니다.

## 2. 애플리케이션 설명
- ### 1) 홈페이지 
**사용자들이 쉽게 상품을 탐색할 수 있는 페이지**
  ![image1](https://github.com/user-attachments/assets/1e5de4cd-03bc-4919-8c31-235c2f2888a3)  

- ### 2) 상품 검색 페이지
**개별 상품 검색할 수 있는 페이지**
![image2](https://github.com/user-attachments/assets/6f0afdbc-a91f-4445-8795-f1704150a131)    

- ### 3) 찜하기 페이지
**찜한 상품을 한눈에 볼 수 있으며, 삭제 기능을 제공하는 페이지**
![image3](https://github.com/user-attachments/assets/6f5bc018-61eb-4f71-a228-d93fc23aacc5)    

- ### 4) 마이 페이지
**주문 내역, 리뷰 내역 등 유저와 관련된 기능을 제공하는 페이지**
![image4](https://github.com/user-attachments/assets/eb9898e0-15d4-4565-a048-11aa9321dfe6)    

- ### 5) 상세 페이지
**선택한 상품을 상세히 볼 수 있는 페이지**
![image5](https://github.com/user-attachments/assets/2ab4cea7-fa4d-419f-a15d-ff36af23d943)    

- ### 6) 주문 페이지
**선택한 상품을 주문할 수 있는 페이지**
![image6](https://github.com/user-attachments/assets/1f504af8-f3bc-4f0d-b93e-e73c00a4cee3)    

- ### 7) 리뷰 페이지
**구매한 상품에 대한 리뷰를 작성하며 공유할 수 있는 페이지**
![image8](https://github.com/user-attachments/assets/b0048a5d-0cb9-4f6a-a03e-486417f85ac6)    

- ### 8) 결제 페이지
**선택한 상품을 최종 결제할 수 있는 페이지**
![image7](https://github.com/user-attachments/assets/382c8089-6e1d-4cbd-850f-e9d5d4de7bbe)

## 3. 기술 스택
- **프론트엔드**: React, Redux  
  본 프로젝트는 React와 Redux를 사용하여 사용자 인터페이스와 상태 관리를 구현하였습니다. Redux는 Flux 디자인 패턴을 기반으로 애플리케이션의 상태를 중앙에서 관리하며, 컴포넌트 간의 데이터 흐름을 일관성 있게 유지합니다.

- **백엔드 및 데이터베이스**: Firebase  
  Firebase를 사용하여 백엔드 서비스를 구현하였습니다. Firestore는 실시간 데이터베이스로 사용되어 사용자와 상품 데이터를 저장하고 관리합니다. Firebase Functions를 활용하여 transaction data의 무결성을 검증하고, 토스 페이 연동을 구현하여 안전한 결제 프로세스를 지원합니다. 또한, Firebase Hosting을 통해 애플리케이션을 배포하여 빠르고 안전한 웹 환경을 제공합니다.

## 4. 프로젝트 체험
[여기](https://youngfarmer-beta.web.app/)에서 웹 애플리케이션을 이용할 수 있습니다.

## 5. 이슈
현재 Firebase Authentication 정책으로 Oauth 로그인 (네이버, 카카오, 애플)이 불가합니다. 일부 기능에 문제가 있을 수 있습니다.
