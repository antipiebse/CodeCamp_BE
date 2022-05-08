# NestJS와 GraphQL, TypeORM을 이용한 쇼핑몰 API구현

---
> 백엔드 주니어 개발자의 쇼핑몰 구축을 위한 API 개발 일지입니다.

이번 프로젝트에서는 쇼핑몰에서 사용할 수 있는 API를 개발해보고자 하였습니다. 물론 쇼핑몰이 아니더라도 필요한 곳에서 사용할 수 있도록 의존성 주입을 하여 비즈니스 로직을 따로 구현하였습니다. 아직 한창 공부 중이며 어떠한 방식으로 완성해 나갈지 고민하는 단계이니 이 점을 참고하여 주시길 바라겠습니다.

먼저 사용한 기술 스택에 대해 간단하게 소개해드리겠습니다.
## 기술 스택
---
사용하는 언어는 TypeScript로 서버 개발을 위한 프레임 워크는 TypeScript를 지원하는 NestJS를 사용하였습니다. 
NestJS 공식 페이지에 나와있고, Nestjs를 이용한 개발에 종종 추천되는 GraphQL을 사용하였습니다. 

### 타입스크립트 설치
```
npm install typescript
yarn add typescript
```

### NestJS설치 
```
npm i -g @nestjs/cli
yarn add @nestjs/cli
```

### graphQL설치
```
npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express
yarn add @nestjs/graphql @nestjs/apollo graphql apollo-server-express
```

이외에도 많은 NPM라이브러리를 사용하였습니다. 설치 방법에 대해 자세히 알고싶을 땐 아래 링크를 참고하는 것이 좋습니다.
>[npm](https://www.npmjs.com/)
[NestJS공식문서](https://docs.nestjs.com/)

## ERD
---
쇼핑몰 설계를 위해 제작한 ERD입니다. 
![](https://velog.velcdn.com/images/antipiebse/post/a86e9d2b-d110-4cd1-b9a8-868cf672c709/image.png)

아직 배송이나 장바구니 등 자세한 부분에 대한 설계가 미흡한 점이 있습니다. (계속해서 수정하며
 업로드할 예정입니다.)

## Pipeline
---
쇼핑몰에서 상품에 대한 검색 시 백엔드 서버에서 먼저 Redis에 저장이 되어있는 지 확인한 후 있다면 그대로 그 값을 반환하고, 없다면 ElasticSearch를 통해 데이터를 받아와 Redis에 캐싱하고 데이터를 반환하는 형식입니다. 
MySQL에서 logstash를 통해 주기적으로 데이터를 가져와 처리한 후 elasticSearch에 새로운 데이터만 저장하도록 구현하고자 하였습니다. 
![](https://velog.velcdn.com/images/antipiebse/post/6d2c276b-1905-48b8-99f4-1c204a196f26/image.png)

## 폴더 구조
---
위에서 계속 설명했다시피 아직 공부하며 수정해 나가는 과정이므로 이 구조가 점점 필요에 따라 수정될 수 있습니다. 

```
.
├── README.md
├── backend
│   ├── elk
│   │   └── logstash
│   ├── src
│   │   ├── apis
│   │   │   ├── auth
│   │   │   ├── coupon
│   │   │   ├── event
│   │   │   ├── exchange
│   │   │   ├── file
│   │   │   ├── iamport
│   │   │   ├── order
│   │   │   ├── payment
│   │   │   ├── productCart
│   │   │   ├── productImage
│   │   │   ├── products
│   │   │   ├── productsMainCategory
│   │   │   ├── productsSubCategory
│   │   │   ├── productsTag
│   │   │   └── user
│   │   ├── app.module.ts
│   │   ├── common
│   │   └── main.ts
├── frontend
│   ├── img
│   └── login
└── functions
```
## api 소개
---
우선 쇼핑몰이든 중고마켓이든 물건을 판매하고 글을 작성하거나 후기를 적을 수 있는 사이트라면 필요한 부분만 가져가 사용할 수 있도록 구현하였습니다. 자세한 사항은 소스코드 속 주석을 통해 확인할 수 있습니다.

## 프로젝트 설치& 사용 방법
---
우선 code를 사용하기 위해 제 깃허브 레포지토리 [antipiebse](https://github.com/antipiebse/codecamp_backend_02)에서 다운을 받아야합니다. 

링크에 들어온 후 아래 사진에 강조된 부분을 클릭하여 복사합니다,
![](https://velog.velcdn.com/images/antipiebse/post/365bb544-3993-4875-934a-b04cd5a5e8d9/image.png)

복사 후 git clone 명령어를 통해 파일을 내려받습니다.
```
git clone https://github.com/antipiebse/codecamp_backend_02.git
```

그럼 api들을 사용할 준비가 끝났습니다. 필요한 부분만 긁어내 사용하여도 좋고, 추가적으로 api를 작성하여 프로젝트를 진행해도 좋습니다.

## 배포 주소
---
실제로 배포를 한 주소는 아래와 같습니다.
```
https://backendapi.antipiebse.shop
```

그러나 gcp 무료 크레딧을 거의 다 사용해버려서 우선 인스턴스를 중지시켰고, 기회가 된다면 아직 미완성된 이 프로젝트를 완성하여 다시 배포할 예정입니다.

## 마지막으로!!!
--- 
저는 이번 쇼핑몰, 중고마켓 보일러 플레이트를 만들면서 제가 한참 부족하다는 것을 느꼈습니다. 누군가에겐 제 코드가 대단해 보일 수 있고, 또 누군가에겐 제 코드가 한참 부족해보인다고 느껴질 수 있습니다. 저의 코드가 언젠간 모두에게 좋은 코드로 인정받을 수 있는 그 날이 올 때까지 포기하지 않고 달려나가겠습니다. 누군가에겐 도움이 되길 바라며 README를 끝냅니다.

> 개발지식을 정리하는 제 블로그입니다. 위 api를 만드는 과정이 좀 더 자세하게 나와있으니 참고하면 좋을 것 같아 참조합니다.
https://velog.io/@antipiebse
