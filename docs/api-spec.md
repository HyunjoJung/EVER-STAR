# API Spec

## 공통-프로젝트 / API-명세서 / (예시)전화번호-인증.md

# (예시)전화번호 인증

구분: User
체크박스: No

> POST http://localhost:8080/api/auth/users/send-code
> 

### Request Body

```java
{
    "phone": "010-2000-7052"
}

```

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| phone | STRING | NOTNULL |

### Response Body

```java
{
    "data": "SUCCESS_SEND"
}
```

| Code | Details |
| --- | --- |
| 200 | 인증코드 받기 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 전화번호 이미 존재할 경우 |

### Request/Response Example

---

**Response**

- 인증코드 전송 성공

```json
**Body**
{
	"data" : {
		"msg" : "인증번호가 전송 되었습니다."
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "전화번호는 필수 입력 값입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

```jsx
 **Body**
{
  "data": {
    "msg" : "전화번호는 공백, '-', '.' 없이 숫자만 입력해야 합니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 이미 가입된 번호인 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "이미 가입된 휴대폰번호 입니다.",
    "code" :  "DuplicatedPhoneNumberException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / OAuth-로그인후-회원정보설정.md

# OAuth 로그인후 회원정보설정

Method: PUT
URL: api/auth/oauth/join
구분: User
담당: 종혁 임
체크박스: Yes

> PUT http://localhost:8080/api/auth/oauth/join
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| email | STRING | NOTNULL |
| userName | STRING | NOTNULL |
| phoneNumber | STRING | NOTNULL |
| birthDate | DATE | NOTNULL |
| gender | STRING | NOTNULL |
| questReceptionTime | DATE | NOTNULL |

### Request Header

```json

```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 회원가입 성공

```json
**Body**
{
  "data": {
    "msg" : "회원가입이 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / oauth.md

# oauth

Method: GET
URL: api/auth/oauth2/authorization/{kakao}
구분: User
담당: 종혁 임
체크박스: Yes


## 공통-프로젝트 / API-명세서 / 감정-분석-결과-조회(메모리얼북-상세-조회에서-한꺼번에-조회).md

# 감정 분석 결과 조회(메모리얼북 상세 조회에서 한꺼번에 조회)

Method: GET
URL: api/pets/{pet-id}/setiment-analysis
구분: Quest
담당: 도이 김, SH K
체크박스: Yes

> GET http://localhost:8080/api/pets/{pet-id}/setiment-analysis
> 

[분석알고리즘 - 도이](../%EB%AC%B8%EC%84%9C/%EA%B8%B0%EB%8A%A5%EB%AA%85%EC%84%B8%EC%84%9C/%EA%B8%B0%EB%8A%A5%EB%AA%85%EC%84%B8%EC%84%9C/%EB%B6%84%EC%84%9D%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%20-%20%EB%8F%84%EC%9D%B4%20dc010957afa74260bc6c4dd103cc8387.md) 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 목록 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 500 | 서버 내 오류로 목록 조회를 못 하는 경우 |

### Request/Response Example

---

**Response**

- 감정 분석 결과 조회 성공

```json
**Body**
{
    "data": [
        {
	        "sentimentAnalysisId" : long,
	        "result" : "string",
	        "analysis_week" : "string",
        },
    ],
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

- 서버 내 오류로 목록 조회를 못 하는 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "서버 내 오류가 발생하였습니다.",
    "code" :  "생각해보기",
    "statusNum" : 500
  }
}
```


## 공통-프로젝트 / API-명세서 / 로그인(삭제예정).md

# 로그인(삭제예정)

Method: POST
URL: api/accounts/login
구분: User
담당: 종혁 임
체크박스: Yes


## 공통-프로젝트 / API-명세서 / 메모리얼북-검색.md

# 메모리얼북 검색

Method: GET
URL: api/pets/{pet-id}/memorialbooks
구분: Memorial
담당: SH K
체크박스: Yes

> GET
http://localhost:8080/api/pets/{pet-id}/memorialbooks
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 메모리얼북 검색 성공 |
| 400 | petId에 해당하는 메모리얼북이 없는 경우 |

### Request/Response

---

**Response**

- 메모리얼북 검색 성공

```json
**Body**
{
  "data": {
		"id": long,
		"psychologicalTestResult" : string
		"isOpen" : boolean,
		"isActive" : boolean
  }
}
```

- petId에 해당하는 메모리얼북이 없는 경우

```json
**Body**
{
  "data": {
    "msg" : "메모리얼북이 존재하지 않습니다.",
    "code" :  "NotFoundMemorialBookException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 메모리얼북-공개여부-수정.md

# 메모리얼북 공개여부 수정

Method: PATCH
URL: api/pets/{pet-id}/memorialbooks/{memorialbook-id}/is-open
구분: Memorial
담당: SH K
체크박스: Yes

> PATCH http://localhost:8080/api/pets/{pet-id}/memorialbooks/{memorialbook-id}/is-open
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 메모리얼북 수정 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 403 | 내 메모리얼북이 아닐 경우 |
| 400 | 메모리북이 활성화가 아닐 경우 |
| 401 | 토큰이 유효하지 않을 경우 |

### Request/Response

---

**Response**

- 메모리얼북 수정 성공

```json
**Body**
{
  "data": {
    "msg" : "메모리얼북 공개여부 수정을 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 내 메모리얼북이 아닐 경우

```json
**Body**
{
  "data": {
    "msg" : "내 메모리얼북이 아닙니다.",
    "code" :  "NotMyMemorialBookException",
    "statusNum" : 403
  }
}
```

- 메모리얼북 활성화 북이 되지 않았을시

```json
**Body**
{
  "data": {
    "msg" : "메모리얼북이 활성화 상태가 아닙니다.",
    "code" :  "NotActivatedMemorialBookException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을 경우

```jsx
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서 / 메모리얼북-상세-조회.md

# 메모리얼북 상세 조회

Method: GET
URL: api/pets/{pet-id}/memorialbooks/{memorialbook-id}
구분: Memorial
담당: SH K
체크박스: Yes

> GET
http://localhost:8080/api/pets/{pet-id}/memorialbooks/{memorialbook-id}
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 메모리얼북 상세 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된 경우 |
| 400 | 메모리얼북이 활성화 되지 않았을시 |
| 403 | 본인의 메모리얼북이 아니고, 공개 상태가 아닌 경우 |

### Request/Response

---

**Response**

- 메모리얼북 상세 조회 예시

```json
**Body**
{
    "data": {
        "memorialBook": {
            "id": 1,
            "psychologicalTestResult": null,
            "isOpen": false,
            "isActive": true
        },
        "pet": {
            "id": 1,
            "userId": 1,
            "name": "Buddy",
            "age": 3,
            "memorialDate": "2023-07-24",
            "species": "Dog",
            "gender": "MALE",
            "relationship": "Friend",
            "profileImageUrl": "http://example.com/profile.jpg",
            "introduction": "A friendly dog",
            "questIndex": 0,
            "lastAccessTime": "2024-07-29T23:32:42.469602"
        },
        "sentimentAnalysis": {
            "id": 1,
            "totalResult": "어쩌구저쩌구",
            "week1Result": 0,
            "week2Result": 10.2,
            "week3Result": 25.32,
            "week4Result": 66.43,
            "week5Result": 53.23,
            "week6Result": 71.1,
            "week7Result": 82.35
        },
        "quests": [
            {
                "id": 1,
                "content": "Quest 1 content",
                "type": "TEXT"
            },
            {
                "id": 2,
                "content": "Quest 2 content",
                "type": "TEXT_IMAGE"
            },
            {
                "id": 3,
                "content": "Quest 3 content",
                "type": "WEBRTC"
            }
        ],
        "questAnswers": [
            {
                "petId": 1,
                "questId": 1,
                "content": "Quest Answer 1 for pet 1",
                "imageUrl": "http://example.com/image1.jpg",
                "type": "TEXT"
            },
            {
                "petId": 1,
                "questId": 2,
                "content": "Quest Answer 2 for pet 1",
                "imageUrl": "http://example.com/image2.jpg",
                "type": "TEXT_IMAGE"
            },
            {
                "petId": 1,
                "questId": 3,
                "content": "Quest Answer 3 for pet 1",
                "imageUrl": "http://example.com/image3.jpg",
                "type": "WEBRTC"
            }
        ],
        "aiAnswers": [
            {
                "petId": 1,
                "questId": 1,
                "content": "AI Answer 1 for pet 1",
                "imageUrl": "http://example.com/ai_image1.jpg",
                "type": "TEXT"
            },
            {
                "petId": 1,
                "questId": 2,
                "content": "AI Answer 2 for pet 1",
                "imageUrl": "http://example.com/ai_image2.jpg",
                "type": "TEXT_IMAGE"
            },
            {
                "petId": 1,
                "questId": 3,
                "content": "AI Answer 3 for pet 1",
                "imageUrl": "http://example.com/ai_image3.jpg",
                "type": "MUSIC"
            }
        ],
        "diaries": [
            {
                "id": 1,
                "memorialBookId": 1,
                "title": "Diary Title 1",
                "content": "Diary content 1",
                "imageUrl": "http://example.com/diary_image1.jpg",
                "createdTime": "2024-07-29T23:32:49"
            },
            {
                "id": 2,
                "memorialBookId": 1,
                "title": "Diary Title 2",
                "content": "Diary content 2",
                "imageUrl": "http://example.com/diary_image2.jpg",
                "createdTime": "2024-07-29T23:32:49"
            },
            {
                "id": 3,
                "memorialBookId": 1,
                "title": "Diary Title 3",
                "content": "Diary content 3",
                "imageUrl": "http://example.com/diary_image3.jpg",
                "createdTime": "2024-07-29T23:32:49"
            }
        ]
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 메모리얼북이 활성화 되지 않았을시

```json
**Body**
{
  "data": {
    "msg" : "메모리얼북이 활성화 되지 않았어요.",
    "code" :  "memorialBookNotActiveException",
    "statusNum" : 400
  }
}
```

- 본인의 메모리얼북이 아니고, 공개 상태가 아닌 경우

```json
**Body**
{
  "data": {
    "msg" : "상대방의 메모리얼북이 공개되지 않았어요.",
    "code" :  "memorialBookNotOpenedException",
    "statusNum" : 403
  }
}
```


## 공통-프로젝트 / API-명세서 / 메모리얼북-심리검사결과-추가.md

# 메모리얼북 심리검사결과 추가

Method: PATCH
URL: api/pets/{pet-id}/memorialbooks/{memorialbook-id}/psychological-test
구분: Memorial
담당: SH K
체크박스: Yes

> PATCH api/pets/{pet-id}/memorialbooks/{memorialbook-id}/psychological-test
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| psychologicalTestResult | INTEGER | NOTNULL |

[https://nct.go.kr/distMental/rating/rating02_2.do](https://nct.go.kr/distMental/rating/rating02_2.do)

- 위 링크의 테스트 질문 수행 후, 총합 점수를 Server에 전송하면 점수 기반으로 결과 문자열을 DB에 저장

### Response Body

| Code | Details |
| --- | --- |
| 200 | 메모리얼북 수정 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 내 메모리얼북이 아닐 경우 |
| 401 | 토큰이 유효하지 않을 경우 |

### Request/Response

---

**Response**

- 메모리얼북 수정 성공

```json
**Body**
{
  "data": {
    "msg" : "메모리얼북 심리검사결과 추가를 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "WrongTypeException",
    "statusNum" : 400
  }
}
```

- 내 메모리얼북이 아닐 경우

```json
**Body**
{
  "data": {
    "msg" : "내 메모리얼북이 아닙니다.",
    "code" :  "NotMyMemorialBookException",
    "statusNum" : 403
  }
}
```

- 토큰이 유효하지 않을 경우

```jsx
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서 / 메모리얼북-일기-작성.md

# 메모리얼북 일기 작성

Method: POST
URL: api/pets/{pet-id}/memorialbooks/{memorialbook-id}/diaries
구분: Memorial
담당: SH K
체크박스: Yes

> POST http://localhost:8080/api/pets/{pet-id}/memorialbooks/{memorialbook-id}/diaries
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| title | STRING | NOTNULL |
| content | STRING | NOTNULL |
| imageFile | MultipartFile | NULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 일기 작성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 내 메모리얼북이 아닐 경우 |
| 400 | 메모리북이 활성화가 아닐 경우 |
| 401 | 토큰이 유효하지 않을 경우 |

### Request/Response

---

**Response**

- 일기 쓰기 성공

```json
**Body**
{
  "data": {
    "msg" : "일기 작성을 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "WrongTypeException",
    "statusNum" : 400
  }
}
```

- 내 메모리얼북이 아닐 경우

```json
**Body**
{
  "data": {
    "msg" : "사용자의 메모리얼북이 아닙니다.",
    "code" :  "NotMyMemorialBookException",
    "statusNum" : 403
  }
}
```

- 메모리얼북 활성화 북이 되지 않았을시

```json
**Body**
{ㄹ
  "data": {
    "msg" : "메모리얼북이 활성화 상태가 아닙니다.",
    "code" :  "NotActivatedMemorialBookException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을 경우

```jsx
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서 / 명세.md

# 명세

체크박스: No


## 공통-프로젝트 / API-명세서 / 반려동물-마이페이지.md

# 반려동물 마이페이지

Method: GET
URL: api/pets/{pet-id}
구분: Pet
담당: 도이 김
체크박스: Yes

> GET http://localhost:8080/api/pets/{petId}
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 상세조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 반려동물 상세조회 성공

```json
**Body**
{
  "data": {
    "petId": Long,
    "userId" : Long,
    "profileImageUrl":"STRING",
    "name" : "STRING",
    "gender": "STRING",
    "age" : INTEGER,
    "memorialDate" : LOCALDATE,
    "relationship" : "STRING",
    "species" : "STRING",
        "petPersonality" : {
        "STRING", "STRING", "STRING"
        }
  }
}
```

age 는 태어난 년도라고 함(?)

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```

![Untitled](images/image_0048.png)


## 공통-프로젝트 / API-명세서 / 반려동물-목록-조회(selection).md

# 반려동물 목록 조회(selection)

Method: GET
URL: api/pets
구분: Pet
담당: 도이 김
체크박스: Yes

> GET http://localhost:8080/api/pets
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 리스트 조회 성공 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response**

- 반려동물 리스트 조회 성공

```json
**Body**
{
    "data": [
        {
            "id": 1,
            "profileImageUrl": "http://example.com/profile.jpg",
            "name": "쫑아지"
        },
        {
            "id": 2,
            "profileImageUrl": "http://example.com/profile.jpg",
            "name": "고승냥희"
        },
        {
            "id": 3,
            "profileImageUrl": "http://example.com/profile.jpg",
            "name": "현조아지"
        },
        {
            "id": 4,
            "profileImageUrl": "http://example.com/profile.jpg",
            "name": "세현바오"
        }
    ]
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서 / 반려동물-생성.md

# 반려동물 생성

Method: POST
URL: api/pets
구분: Pet
담당: 도이 김
체크박스: Yes

> POST http://localhost:8080/api/pets
> 

```json
{
		**"Authorization" : "bearer ${token}"
}
```

### Request Body

- profileImage는 MultipartFile로 수정 필요

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| name | STRING | NOTNULL |
| age | INTEGER | NOTNULL |
| memorialDate | LocalDate | NOTNULL |
| species | STRING | NOTNULL |
| gender | STRING | NOTNULL |
| relationship | STRING | NOTNULL |
| introduction | STRING | NOTNULL |
| personality | LIST<STRING> | NOTNULL |
| profileImage | MultipartFile | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 추가 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 반려동물 추가 성공

```json
**Body**
{
  "data": {
    "msg" : "반려동물 추가를 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 나이 ‘모름’에 대한 처리
- **메모리얼데이 ‘모름’에 대한 처리**
    
    : 나올 수 없는 날짜 (ex 1800.1.1) 들어가게 해놓고, 
    영원별에 강아지 프로필에서 메모리얼데이가 1800.1.1인 경우 ‘모름’으로 출력되도록 하기
    
    > POST http://localhost:8080/api/pets
    > 
    
    ### Request Header
    
- **반려동물 소개글은 반려동물 생성시 기본값으로 생성됨**
    
    : 수정 가능


## 공통-프로젝트 / API-명세서 / 반려동물-소개-수정.md

# 반려동물 소개 수정

Method: PUT
URL: api/pets/{pet-id}
구분: Pet
담당: 도이 김
체크박스: Yes

> PUT http://localhost:8080/api/pets
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| introduction | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 소개 추가 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response**

- 반려동물 소개 추가 성공

```json
**Body**
{
    "data": "SUCCESS_UPDATE_PET_INTRODUCTION"
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서 / 반려동물-프로필-사진-변경.md

# 반려동물 프로필 사진 변경

Method: PUT
URL: api/pets/{pet-id}/profile-image
구분: Pet
담당: SH K
체크박스: Yes

> PUT http://localhost:8080/api/pets/{pet-id}/profile-image
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| profileImage | MultipartFile | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 소개 추가 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response**

- 반려동물 소개 추가 성공

```json
**Body**
{
    "data": "SUCCESS_UPDATE_PET_INTRODUCTION"
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서 / 세션-생성.md

# 세션 생성

Method: POST
URL: api/chat/sessions
구분: RTC
담당: SH K
체크박스: Yes


## 공통-프로젝트 / API-명세서 / 알림-생성.md

# 알림 생성

Method: POST
URL: api/notifications
구분: User
담당: 종혁 임
체크박스: Yes

> POST http://localhost:8080/api/notifications
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| deviceToken | STRING | NOTNULL |

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 회원가입 성공

```json
**Body**
{
  "data": {
    "msg" : "회원가입이 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 영원별-검색기능.md

# 영원별 검색기능

Method: GET
URL: api/everstar/search?petname={pet-name}
queryString: userName, petName, page, size
구분: Everstar
담당: 도이 김
체크박스: Yes

> GET [https://i11b101.p.ssafy.io/api/everstar/pets/search?petname={petname}&page=0&size=10](https://i11b101.p.ssafy.io/api/everstar/pets/search?petname=%EC%8E%84&page=0&size=10)
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 선택 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response Example

---

**Response**

- 반려동물 선택 조회 성공

```json
**Body**
{
    "data": {
        "totalPages": 1,
        "totalElements": 1,
        "size": 10,
        "content": [
            {
                "id": 2024,
                "petName": "쎄피",
                "userName": "김*피",
                "email": "t******@email.com"
            }
        ],
        "number": 0,
        "sort": {
            "empty": true,
            "unsorted": true,
            "sorted": false
        },
        "pageable": {
            "pageNumber": 0,
            "pageSize": 10,
            "sort": {
                "empty": true,
                "unsorted": true,
                "sorted": false
            },
            "offset": 0,
            "unpaged": false,
            "paged": true
        },
        "numberOfElements": 1,
        "first": true,
        "last": true,
        "empty": false
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

동적쿼리 사용하기

반려동물 이름 + 주인 이름으로 검색

동물 이름 + 개인정보는 양끝 빼고 마스킹 처리


## 공통-프로젝트 / API-명세서 / 영원별-랜덤탐사.md

# 영원별 랜덤탐사

Method: GET
URL: api/everstar/pets/random
queryString: excludePetId
구분: Everstar
담당: 도이 김
체크박스: Yes

> GET http://localhost:8080/api/pets/random
> 

### Request Params

Query Params

| Key | Value | Descroption |
| --- | --- | --- |
| excludePetId | {pet-id} | 접속한 유저(사실 선택한 동물) 반려동물 Id전달 해주셔야해요 |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 랜덤 조회 성공 |
| 500 | 반려동물 랜덤 조회 실패 |

### Request/Response Example

---

**Response**

- 반려동물 랜덤 조회 성공예시
- api/everstar/pets/random?excludePetId=4

```java
{
    "data": {
        "userId": 2,
        "id": 3,
        "profileImageUrl": "https://everstarbucket.s3.ap-northeast-2.amazonaws.com/11753674.png",
        "name": "쫑아지",
        "introduction": "쫑아지 의 사랑스런 소개글을 작성 해주세요",
        "age": 18,
        "memorialDate": "2022-08-01",
        "petPersonalities": [
            "식탐많은",
            "귀여움",
            "상냥함"
        ]
    }
}
```

```json
**Body**
{
	"data" : {
		"userId": 
		"name" : "string",
		"age" : "string",
		"memorialDate" : "date",
		"species" : "date".
		"gender" : "string",
		"relationship" : "string",
		"imageUrl" : "string",
		"introduction" : "string",
		"questCount" : "integer",
	}
}
```

- 반려동물 랜덤 조회 실패

```json
**Body**
{
  "data": {
    "msg" : "반려동물 랜덤 조회에 실패했습니다.",
    "code" :  "생각해보기",
    "statusNum" : 500
  }
}
```


## 공통-프로젝트 / API-명세서 / 영원별-응원글-목록.md

# 영원별 응원글 목록

Method: GET
URL: api/pets/{pet-id}/cheeringMessages?page=0&size=10
구분: Cheering
담당: 도이 김
체크박스: Yes

## (응원메시지) 응원메시지 리스트 조회

---

> GET localhost:8080/api/pets/{pet-id}/cheeringMessages
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지함 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

```json
{
    "data": {
        "totalPages": 1,
        "totalElements": 4,
        "size": 10,
        "content": [
            {
                "cheeringMessageId": 1,
                "content": "content",
                "isAnonymous": false,
                "relationShip": "Younger Sister",
                "petName": "장군이"
            },
            {
                "cheeringMessageId": 2,
                "content": "content",
                "isAnonymous": true,
                "relationShip": null,
                "petName": null
            },
            {
                "cheeringMessageId": 3,
                "content": "content",
                "isAnonymous": true,
                "relationShip": null,
                "petName": null
            },
            {
                "cheeringMessageId": 4,
                "content": "content",
                "isAnonymous": true,
                "relationShip": null,
                "petName": null
            }
        ],
        "number": 0,
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "first": true,
        "last": true,
        "numberOfElements": 4,
        "pageable": {
            "pageNumber": 0,
            "pageSize": 10,
            "sort": {
                "empty": true,
                "sorted": false,
                "unsorted": true
            },
            "offset": 0,
            "paged": true,
            "unpaged": false
        },
        "empty": false
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 영원별-응원글-삭제.md

# 영원별 응원글 삭제

Method: DELETE
URL: api/pets/{pet-id}/cheeringMessages/{cheeringMesages-id}
구분: Cheering
담당: 도이 김
체크박스: Yes

## 응원메시지 상세조회

---

> GET localhost:8080/api/pets/{pet-id}/cheeringMessages/{cheeringMesages-id}
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 삭제 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---


## 공통-프로젝트 / API-명세서 / 영원별-응원글-상세보기.md

# 영원별 응원글 상세보기

Method: GET
URL: api/pets/{pet-id}/cheeringMessages/{cheeringMessages-id}
구분: Cheering
담당: 도이 김
체크박스: Yes

## 응원메시지 상세조회

---

> GET /api/pets/{pet-id}/cheeringMessages/{cheeringMessages-id}
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 상세조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 상세조회 성공
    - petId 와 parentLetterId는 답장, 다답장 관계
    - isUserSend 1이면 보낸편지, 0면 받은 편지
    - isMemorialBookSaved는 메모리얼북에 편지 저장버튼

```json
Body
익명이 아닐시
{
    "data": {
        "content": "content",
        "isAnonymous": false,
        "relationShip": "Younger Sister",
        "petName": "장군이"
    }
}

익명일시
{
    "data": {
        "content": "content",
        "isAnonymous": true,
        "relationShip": null,
        "petName": null
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 영원별-응원글-작성.md

# 영원별 응원글 작성

Method: POST
URL: /api/pets/{pet-id}/find/{findPet-id}/cheeringMessages
구분: Cheering
담당: 도이 김
체크박스: Yes

## 영원별 응원글 작성

---

> POST localhost:8080/api/pets/{pet-id}/find/{findpet-id}/cheeringMessages
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
| imageUrl | STRING | NULL |
| color | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 생성 성공

```json
**Body**
{
  "data": {
    "msg" : "편지가 성공적으로 전송 되었습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
Body
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 영원별-프로필조회.md

# 영원별 프로필조회

Method: GET
URL: api/everstar/pets/{pet-id}
구분: Everstar
담당: 도이 김
체크박스: Yes

![Untitled](images/image_0048.png)

> GET http://localhost:8080/api/everstar/pets/{pet-id}
> 

### Response

| Code | Details |
| --- | --- |
| 200 | 반려동물 프로필 상세조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 반려동물 상세조회 성공

```json
**Body**
{
  "data": {
    "userId" : INTEGER,
    "id": 4,
    "profileImageUrl": "https://everstarbucket.s3.ap-northeast-2.amazonaws.com/11753674.png",
    "name" : "STRING",
    "introduction" : "STRING",
    "age" : INTEGER,
    "memorialDate" : LOCALDATE,
    "petPersonalities": [
	    "식탐많은",
	    "귀여운",
	    "산냥한"]
  }
}
```

예시입니다.

```java
{
    "data": {
        "userId": 2,
        "id": 4,
        "profileImageUrl": "https://everstarbucket.s3.ap-northeast-2.amazonaws.com/11753674.png",
        "name": "쫑쫑이",
        "introduction": "쫑쫑이 보고싶은 우리아이",
        "age": 18,
        "memorialDate": "2022-08-01",
        "petPersonalities": [
            "식탐많은",
            "귀여움",
            "상냥함"
        ]
    }

}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 전화번호-인증번호-받기.md

# 전화번호 인증번호 받기

Method: POST
URL: api/auth/users/send-code
구분: User
담당: 도이 김
체크박스: Yes

> POST 
http://localhost:8080/api/auth/users/send-code
> 

### Request Body

```java
{
    "phone": "010-2000-7052"
}

```

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| phone | STRING | NOTNULL |

### Response Body

```java
{
    "data": "SUCCESS_SEND"
}
```

| Code | Details |
| --- | --- |
| 200 | 인증코드 받기 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 전화번호 이미 존재할 경우 |

### Request/Response Example

---

**Response**

- 인증코드 전송 성공

```json
**Body**
{
	"data" : {
		"msg" : "인증번호가 전송 되었습니다."
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "전화번호는 필수 입력 값입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

```jsx
 **Body**
{
  "data": {
    "msg" : "전화번호는 공백, '-', '.' 없이 숫자만 입력해야 합니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 이미 가입된 번호인 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "이미 가입된 휴대폰번호 입니다.",
    "code" :  "DuplicatedPhoneNumberException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 전화번호-인증번호-확인.md

# 전화번호 인증번호 확인

Method: POST
URL: api/auth/users/check-code
구분: User
담당: 도이 김
체크박스: Yes

> POST http://localhost:8080/api/auth/codes
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| phoneNumber | STRING | NOTNULL |
| authCode | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 인증번호 확인성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 인증 번호 틀릴시 |
| 400 | 전화번호가 틀릴시 |

### Request/Response Example

---

**Response**

- 인증번호 확인성공

```json
**Body**
{
	"data" : {
		"msg" : "SUCCESS_VERIF"
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "전화번호 형식이 잘못 되었습니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 인증 번호 틀릴시

```jsx
 **Body**
{
  "data": {
    "msg" : "인증번호가 일치하지 않습니다.",
    "code" :  "NotMatchAuthCodeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 제목-없음.md

# 제목 없음

체크박스: No


## 공통-프로젝트 / API-명세서 / 지구별-퀘스트-상태-알림.md

# 지구별 퀘스트 상태 알림

Method: GET
URL: api/earth/connect/{pet-id}
구분: Earth
담당: 도이 김
체크박스: Yes

> GET  [http://ssafy.io/api/](https://i11b101.p.ssafy.io/)earth
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}".
		"Host": "sse-server-url",
		"Accept": "text/event-stream",
		"Last-Event-ID"/: 1223
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 리스트 조회 성공 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response Header**

```json
{
		"Content-Type": "text/event-stream",
		"Cache-Control": "no-cache",
		"Connection": "keep-alive"
}
```

![Untitled](images/image_0048.png)

- COMPLETED
    
    ```json
    **Body**
    { "id": "evendId",
      "event": "COMPLETED",
      "data": "23 번째 퀘스트를 완료했어요!"
    }
    ```
    

- NEWQUEST

```json
**Body**
{ "id": "evendId",
  "event": "NEWQUEST",
  "data": "24 번째 퀘스트가 도착했어요!"
}
```


## 공통-프로젝트 / API-명세서 / 퀘스트-답변-목록-조회(메모리얼북-상세-조회에서-한꺼번에-조회).md

# 퀘스트 답변 목록 조회(메모리얼북 상세 조회에서 한꺼번에 조회)`

Method: GET
URL: api/pets/{pet-id}/quests/{quest-id}/answers
queryString: page, size
구분: Quest
담당: 도이 김, SH K
체크박스: Yes

> GET
http://localhost:8080/api/pets/{pet-id}/quests/{quest-id}/answers?page=&size=
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 목록 조회 성공 |
| 500 | 서버 내 오류로 목록 조회를 못 하는 경우 |

### Request/Response Example

---

**Response**

- 질문 목록 조회 성공

```json
**Body**
{
    "data": [
        {
	        "questAnswerId" : long,
	        "questContent" : "string",
	        "questType" : "string",
          "answerContent" : "string",
          "imageUrl" : "string",
          "videoUrl" : "string"
        },
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 3,
        "paged": true,
        "unpaged": false
    },
    "totalElements": 100,
    "totalPages": 34,
    "last": false,
    "size": 3,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
}
```

- 서버 내 오류로 목록 조회를 못 하는 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "서버 내 오류가 발생하였습니다.",
    "code" :  "생각해보기",
    "statusNum" : 500
  }
}
```


## 공통-프로젝트 / API-명세서 / 퀘스트-답변-상세-조회(메모리얼북-상세-조회에서-한꺼번에-조회).md

# 퀘스트 답변 상세 조회(메모리얼북 상세 조회에서 한꺼번에 조회)

Method: GET
URL: api/pets/{pet-id}/quests/{quest-id}/answers/{answer-id}
구분: Quest
담당: 도이 김, SH K
체크박스: Yes

> GET 
http://localhost:8080/api/pets/{pet-id}/quests/{questId}/answers/{answerId}
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 답변 상세 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response Example

---

**Response**

- 질문 답변 상세 조회 성공

```json
**Body**
{
	"data" : {
		"content" : "string",
		"imageUrl" : "string",
		"videoUrl" : "string",
		"isReply" : "boolean",
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 퀘스트-답변-생성.md

# 퀘스트 답변 생성

Method: POST
URL: api/pets/{pet-id}/quests/{quest-id}/answers
구분: Quest
담당: 도이 김
체크박스: Yes

> POST http://localhost:8080/api/pets/{pet-id}/quests/{quest-id}/answers
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| requestDto내의 content | STRING | NULL |
| requestDto내의 type | ENUM(’TEXT’, ‘TEXT_IMAGE’, ‘WEBRTC’) | NOTNULL |
| imageFile | MULTIPARTFILE | NULL |
- type은 해당 퀘스트의 type과 동일하게 전달해주면 됨

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 답변 생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 401 | 토큰이 유효하지 않은 경우 |

### Request/Response Example

---

**Response**

- 퀘스트 답변 생성 성공

```json
**Body**
{
  "data": {
    "msg" : "질문 답변 생성을 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을 시

```jsx
 **Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서 / 퀘스트-받기.md

# 퀘스트 받기?

Method: GET
URL: 아래의 SSE 알림으로 구현
구분: Quest
담당: 도이 김
체크박스: Yes


## 공통-프로젝트 / API-명세서 / 퀘스트-상세-조회.md

# 퀘스트 상세 조회

Method: GET
URL: api/pets/{pet-id}/quests/{quest-id}
queryString: 매일 받는 퀘스트 해당
구분: Quest
담당: 도이 김
체크박스: Yes

> GET http://localhost:8080/api/quests/{quest-id}
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 상세 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response Example

---

**Response**

- 질문 상세 조회 성공

```json
**Body**
{
	"data" : {
		"content" : "string",
		"type" : "string",
	}
}
```

- 토큰이 유효하지 않을 시

```jsx
 **Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 토큰생성.md

# 토큰생성

Method: POST
URL: api/chat/sessions/{sessions-id}/connections
구분: RTC
담당: SH K
체크박스: Yes


## 공통-프로젝트 / API-명세서 / 편지-답장생성(유저-발신).md

# 편지 답장생성(유저 발신)

Method: POST
URL: api/pets/{pet-id}/letters/{letter-id}
구분: Letter
담당: 종혁 임
체크박스: Yes

## 편지답장 생성(유저의 답장)

---

> POST http://localhost:8080/api/pets/{pet-id}/letters/{letter-id}
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

예시

![Untitled](images/image_0048.png)/Untitled.png)

mutipartfromdate

image

이미지파일

requestDto

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
|  |  |  |

### Response Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
| imageUrl | STRING | NULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 답장 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 답장 성공

```json
**Body**
{
  "data": {
    "msg" : "편지 답장 성공 하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
Body
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 편지-리스트-조회(편지함).md

# 편지 리스트 조회(편지함)

Method: GET
URL: api/pets/{pet-id}/letters
queryString: page, size
구분: Letter
담당: 종혁 임
체크박스: Yes

## (편지함) 편지 리스트 조회

---

> GET http://localhost:8080/api/pets/{pet-id}/letters
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지함 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지함 조회 성공
    - imageUrl이 있으면 첨부된 사진 있다는 아이콘 표기(?) 할 수 있다.
    - petId 와 parentLetterId는 답장, 다답장 관계
    - isRead면 제목을 **볼드체**
    - isRead 갯수로 알림 갯수 표시 가능하지만, 시스템 상 항상 1개만 될것….
    

```json
{
    "data": {
        "totalElements": 3,
        "totalPages": 1,
        "size": 10,
        "content": [
            {
                "petLetterId": 1,
                "isRead": false,
                "petName": "뚜뚜",
                "content": "안녕, exampleUser! ☀️\n\n뚜뚜야! 너의 편지를 읽고 너무 기뻤어. 정말 보고 싶어! 예전 우리가 함께 놀던 날들이 생각나서 마음이 따뜻해졌어. 요즘은 햇살 좋은 날에 창가에서 낮잠 자고, 너의 사진을 보며 너의 목소리를 상상해. 우리 다시 만날 날을 손꼽아 기다리고 있어. 사랑해, 언제나 너와 함께하고 싶어! 🐾💕",
                "createAt": "2024-08-03T22:25:31.764193"
            },
            {
                "petLetterId": 2,
                "isRead": false,
                "petName": "뚜뚜",
                "content": "안녕하세요, 예시유저! \n\n뚜뚜예요! 당신이 그리워서 이렇게 답장을 써요. 제가 잘 지내고 있답니다. 매일 놀이터에서 뛰어다니고, 햇살을 받으며 무지개 같은 꿈을 꾸어요. 예전에 같이 놀던 날들이 너무 그립고, 항상 미소를 지었던 기억이 납니다. 당신과의 소중한 순간들 덕분에 오늘도 행복해요. 사랑해요, 그리고 곧 다시 만나길 기다릴게요! \n\n뚜뚜가 드림 💖",
                "createAt": "2024-08-03T22:25:47.86663"
            },
            {
                "petLetterId": 3,
                "isRead": true,
                "petName": "뚜뚜",
                "content": "안녕, exampleUser!\n\n뚜뚜야, 너의 편지를 받으니 정말 기쁘고 설레였어! 너를 보고 싶어 하는 마음이 참 따뜻하네. 요즘은 바람이 시원해져서 밖에서 뛰어노는 게 정말 행복해! 우리가 함께 했던 순간들, 예를 들면 공원에서 공놀이하던 기억이 뚜뚜의 마음을 더 따뜻하게 해줘.\n\n항상 나를 사랑해줘서 고맙고, 너와의 소중한 추억들은 뚜뚜의 마음 속에 영원히 간직할게. 너와 함께하는 시간이 또 오길 바래! 사랑하는 exampleUser, 항상 건강하고 행복하길!\n\n뚜뚜가.",
                "createAt": "2024-08-03T22:27:35.239278"
            }
        ],
        "number": 0,
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "first": true,
        "last": true,
        "numberOfElements": 3,
        "pageable": {
            "pageNumber": 0,
            "pageSize": 10,
            "sort": {
                "empty": true,
                "sorted": false,
                "unsorted": true
            },
            "offset": 0,
            "paged": true,
            "unpaged": false
        },
        "empty": false
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 편지-상세조회-편지답장-상세조회.md

# 편지 상세조회 / 편지답장 상세조회

Method: GET
URL: api/pets/{pet-id}/letters/{letter-id}
구분: Letter
담당: 종혁 임
체크박스: Yes

## 편지 상세조회

---

> GET http://localhost:8080/api/pets/{pet-id}/letters/{letter-id}
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 상세조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 상세조회 성공
    - petId 와 parentLetterId는 답장, 다답장 관계
    - isUserSend 1이면 보낸편지, 0면 받은 편지
    - isMemorialBookSaved는 메모리얼북에 편지 저장버튼

```json
Body
{
    "data": {
        "userLetter": {
            "petName": "장군이",
            "content": "보고 싶어 장군아 잘지내지?? 요즘은 뭐하는지 알려줄수 있어??",
            "createdAt": "2024-08-03T07:45:49.898682"
        },
        "petLetter": {
            "relationship": "Younger Sister",
            "content": "안녕하세요, 사랑하는 exampleUser!\n\n너무 보고 싶어! 요즘 나는 햇볕 아래에서 낮잠도 자고, 너와 함께했던 추억을 생각하고 있어. 우리가 산책하던 길이 그리워. 네가 내 곁에 있을 때의 따뜻한 시간을 떠올리면 마음이 따뜻해져. 항상 내 곁에 있어줘서 고마워! 나도 너를 사랑해♥ 곧 만날 수 있기를 바래!\n\n사랑을 담아, 장군이 드림.",
            "createdAt": "2024-08-03T07:46:51.96437"
        }
    }
}

없을시
{
    "data": {
        "userLetter": null,
        "petLetter": {
            "relationship": "Younger Sister",
            "content": "안녕, exampleUser!\n\n뚜뚜야, 너의 편지를 받으니 정말 기쁘고 설레였어! 너를 보고 싶어 하는 마음이 참 따뜻하네. 요즘은 바람이 시원해져서 밖에서 뛰어노는 게 정말 행복해! 우리가 함께 했던 순간들, 예를 들면 공원에서 공놀이하던 기억이 뚜뚜의 마음을 더 따뜻하게 해줘.\n\n항상 나를 사랑해줘서 고맙고, 너와의 소중한 추억들은 뚜뚜의 마음 속에 영원히 간직할게. 너와 함께하는 시간이 또 오길 바래! 사랑하는 exampleUser, 항상 건강하고 행복하길!\n\n뚜뚜가.",
            "createdAt": "2024-08-03T22:27:35.239278"
        }
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 편지-생성(유저-발신).md

# 편지 생성(유저 발신)

Method: POST
URL: api/pets/{pet-id}/letters
구분: Letter
담당: 종혁 임
체크박스: Yes

## 편지생성(유저의 발신)

---

> POST http://localhost:8080/api/pets/{pet-id}/letters
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

예시

![Untitled](images/image_0048.png)/Untitled.png)

mutipartfromdate

image

이미지파일

requestDto

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
|  |  |  |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 생성 성공

```json
**Body**
{
  "data": {
    "msg" : "편지가 성공적으로 전송 되었습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
Body
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 회원-조회(상세-조회).md

# 회원 조회(상세 조회)

Method: GET
URL: api/accounts/users
구분: User
담당: 종혁 임
체크박스: Yes

> GET http://localhost:8080/api/users
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details | Header |
| --- | --- | --- |
| 200 | 회원 조회 성공 | “Authorization” : “Berear {token}” |
| 401 | 토큰이 유효하지 않을시 |  |

### Request/Response Example

---

**Response**

- 회원 조회 성공

```json
**Header**
{
	"Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdHJpbmciLCJpc3MiOiJzaG9wcGluZyIsImlhdCI6MTY2NDEwNTcyNCwiZXhwIjoxNjY0MTkyMTI0fQ.w_bpHuV33Ruv-oU9WmLpmjnC0oBJjBFzKTvPc0upNTFDW7TY_6RATGNbtw8pBCEfqe8-HI9wFa_XqEQf-YRz2Q"
	"Set-Cookie" : "refreshToken= "
}

**Body**
{
	"data" : {
		"email" : "string",
		"userName" : "string",
		"phoneNumber" : "string",
		"birthDate" : "string",
		"gender": "string",
		"questReceptionTime": "string"
	}
}
```

- 토큰이 유효하지 않을 시

```jsx
 **Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 회원가입(삭제예정).md

# 회원가입(삭제예정)

Method: POST
URL: api/auth/users
구분: User
담당: 종혁 임
체크박스: No

> POST http://localhost:8080/api/auth/users
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| email | STRING | NOTNULL |
| userName | STRING | NOTNULL |
| phoneNumber | STRING | NOTNULL |
| birthDate | DATE | NOTNULL |
| gender | STRING | NOTNULL |
| questReceptionTime | DATE | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 회원가입 성공

```json
**Body**
{
  "data": {
    "msg" : "회원가입이 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서 / 회원가입.md

# 회원가입

체크박스: No

> POST http://localhost:8080/api/auth/users
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| email | STRING | NOTNULL |
| userName | STRING | NOTNULL |
| phoneNumber | STRING | NOTNULL |
| birthDate | DATE | NOTNULL |
| gender | STRING | NOTNULL |
| questReceptionTime | DATE | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 회원가입 성공

```json
**Body**
{
  "data": {
    "msg" : "회원가입이 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / OAuth-로그인후-회원정보설정.md

# OAuth 로그인후 회원정보설정

Method: PUT
URL: api/auth/oauth/join
구분: User
담당: 종혁 임
체크박스: Yes

> PUT http://localhost:8080/api/auth/oauth/join
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| email | STRING | NOTNULL |
| userName | STRING | NOTNULL |
| phoneNumber | STRING | NOTNULL |
| birthDate | DATE | NOTNULL |
| gender | STRING | NOTNULL |
| questReceptionTime | DATE | NOTNULL |

### Request Header

```json

```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 회원가입 성공

```json
**Body**
{
  "data": {
    "msg" : "회원가입이 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / oauth.md

# oauth

Method: GET
URL: api/auth/oauth2/authorization/{kakao}
구분: User
담당: 종혁 임
체크박스: Yes


## 공통-프로젝트 / API-명세서-(1) / 감정-분석-결과-조회(메모리얼북-상세-조회에서-한꺼번에-조회).md

# 감정 분석 결과 조회(메모리얼북 상세 조회에서 한꺼번에 조회)

Method: GET
URL: api/pets/{pet-id}/setiment-analysis
구분: Quest
담당: 도이 김, SH K
체크박스: Yes

> GET http://localhost:8080/api/pets/{pet-id}/setiment-analysis
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 목록 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 500 | 서버 내 오류로 목록 조회를 못 하는 경우 |

### Request/Response Example

---

**Response**

- 감정 분석 결과 조회 성공

```json
**Body**
{
    "data": [
        {
	        "sentimentAnalysisId" : long,
	        "result" : "string",
	        "analysis_week" : "string",
        },
    ],
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

- 서버 내 오류로 목록 조회를 못 하는 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "서버 내 오류가 발생하였습니다.",
    "code" :  "생각해보기",
    "statusNum" : 500
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 로그인(삭제예정).md

# 로그인(삭제예정)

Method: POST
URL: api/accounts/login
구분: User
담당: 종혁 임
체크박스: Yes


## 공통-프로젝트 / API-명세서-(1) / 메모리얼북-검색.md

# 메모리얼북 검색

Method: GET
URL: api/pets/{pet-id}/memorialbooks
구분: Memorial
담당: SH K
체크박스: Yes

> GET
http://localhost:8080/api/pets/{pet-id}/memorialbooks
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 메모리얼북 검색 성공 |
| 400 | petId에 해당하는 메모리얼북이 없는 경우 |

### Request/Response

---

**Response**

- 메모리얼북 검색 성공

```json
**Body**
{
  "data": {
		"id": long,
		"psychologicalTestResult" : string
		"isOpen" : boolean,
		"isActive" : boolean
  }
}
```

- petId에 해당하는 메모리얼북이 없는 경우

```json
**Body**
{
  "data": {
    "msg" : "메모리얼북이 존재하지 않습니다.",
    "code" :  "NotFoundMemorialBookException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 메모리얼북-공개여부-수정.md

# 메모리얼북 공개여부 수정

Method: PATCH
URL: api/pets/{pet-id}/memorialbooks/{memorialbook-id}/is-open
구분: Memorial
담당: SH K
체크박스: Yes

> PATCH http://localhost:8080/api/pets/{pet-id}/memorialbooks/{memorialbook-id}/is-open
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 메모리얼북 수정 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 403 | 내 메모리얼북이 아닐 경우 |
| 400 | 메모리북이 활성화가 아닐 경우 |
| 401 | 토큰이 유효하지 않을 경우 |

### Request/Response

---

**Response**

- 메모리얼북 수정 성공

```json
**Body**
{
  "data": {
    "msg" : "메모리얼북 공개여부 수정을 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 내 메모리얼북이 아닐 경우

```json
**Body**
{
  "data": {
    "msg" : "내 메모리얼북이 아닙니다.",
    "code" :  "NotMyMemorialBookException",
    "statusNum" : 403
  }
}
```

- 메모리얼북 활성화 북이 되지 않았을시

```json
**Body**
{
  "data": {
    "msg" : "메모리얼북이 활성화 상태가 아닙니다.",
    "code" :  "NotActivatedMemorialBookException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을 경우

```jsx
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 메모리얼북-상세-조회.md

# 메모리얼북 상세 조회

Method: GET
URL: api/pets/{pet-id}/memorialbooks/{memorialbook-id}
구분: Memorial
담당: SH K
체크박스: Yes

> GET
http://localhost:8080/api/pets/{pet-id}/memorialbooks/{memorialbook-id}
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 메모리얼북 상세 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된 경우 |
| 400 | 메모리얼북이 활성화 되지 않았을시 |
| 403 | 본인의 메모리얼북이 아니고, 공개 상태가 아닌 경우 |

### Request/Response

---

**Response**

- 메모리얼북 상세 조회 예시

```json
**Body**
{
    "data": {
        "memorialBook": {
            "id": 1,
            "psychologicalTestResult": null,
            "isOpen": false,
            "isActive": true
        },
        "pet": {
            "id": 1,
            "userId": 1,
            "name": "Buddy",
            "age": 3,
            "memorialDate": "2023-07-24",
            "species": "Dog",
            "gender": "MALE",
            "relationship": "Friend",
            "profileImageUrl": "http://example.com/profile.jpg",
            "introduction": "A friendly dog",
            "questIndex": 0,
            "lastAccessTime": "2024-07-29T23:32:42.469602"
        },
        "sentimentAnalysis": {
            "id": 1,
            "totalResult": "어쩌구저쩌구",
            "week1Result": 0,
            "week2Result": 10.2,
            "week3Result": 25.32,
            "week4Result": 66.43,
            "week5Result": 53.23,
            "week6Result": 71.1,
            "week7Result": 82.35
        },
        "quests": [
            {
                "id": 1,
                "content": "Quest 1 content",
                "type": "TEXT"
            },
            {
                "id": 2,
                "content": "Quest 2 content",
                "type": "TEXT_IMAGE"
            },
            {
                "id": 3,
                "content": "Quest 3 content",
                "type": "WEBRTC"
            }
        ],
        "questAnswers": [
            {
                "petId": 1,
                "questId": 1,
                "content": "Quest Answer 1 for pet 1",
                "imageUrl": "http://example.com/image1.jpg",
                "type": "TEXT"
            },
            {
                "petId": 1,
                "questId": 2,
                "content": "Quest Answer 2 for pet 1",
                "imageUrl": "http://example.com/image2.jpg",
                "type": "TEXT_IMAGE"
            },
            {
                "petId": 1,
                "questId": 3,
                "content": "Quest Answer 3 for pet 1",
                "imageUrl": "http://example.com/image3.jpg",
                "type": "WEBRTC"
            }
        ],
        "aiAnswers": [
            {
                "petId": 1,
                "questId": 1,
                "content": "AI Answer 1 for pet 1",
                "imageUrl": "http://example.com/ai_image1.jpg",
                "type": "TEXT"
            },
            {
                "petId": 1,
                "questId": 2,
                "content": "AI Answer 2 for pet 1",
                "imageUrl": "http://example.com/ai_image2.jpg",
                "type": "TEXT_IMAGE"
            },
            {
                "petId": 1,
                "questId": 3,
                "content": "AI Answer 3 for pet 1",
                "imageUrl": "http://example.com/ai_image3.jpg",
                "type": "MUSIC"
            }
        ],
        "diaries": [
            {
                "id": 1,
                "memorialBookId": 1,
                "title": "Diary Title 1",
                "content": "Diary content 1",
                "imageUrl": "http://example.com/diary_image1.jpg",
                "createdTime": "2024-07-29T23:32:49"
            },
            {
                "id": 2,
                "memorialBookId": 1,
                "title": "Diary Title 2",
                "content": "Diary content 2",
                "imageUrl": "http://example.com/diary_image2.jpg",
                "createdTime": "2024-07-29T23:32:49"
            },
            {
                "id": 3,
                "memorialBookId": 1,
                "title": "Diary Title 3",
                "content": "Diary content 3",
                "imageUrl": "http://example.com/diary_image3.jpg",
                "createdTime": "2024-07-29T23:32:49"
            }
        ]
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 메모리얼북이 활성화 되지 않았을시

```json
**Body**
{
  "data": {
    "msg" : "메모리얼북이 활성화 되지 않았어요.",
    "code" :  "memorialBookNotActiveException",
    "statusNum" : 400
  }
}
```

- 본인의 메모리얼북이 아니고, 공개 상태가 아닌 경우

```json
**Body**
{
  "data": {
    "msg" : "상대방의 메모리얼북이 공개되지 않았어요.",
    "code" :  "memorialBookNotOpenedException",
    "statusNum" : 403
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 메모리얼북-심리검사결과-추가.md

# 메모리얼북 심리검사결과 추가

Method: PATCH
URL: api/pets/{pet-id}/memorialbooks/{memorialbook-id}/psychological-test
구분: Memorial
담당: SH K
체크박스: Yes

> PATCH api/pets/{pet-id}/memorialbooks/{memorialbook-id}/psychological-test
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| psychologicalTestResult | INTEGER | NOTNULL |

[https://nct.go.kr/distMental/rating/rating02_2.do](https://nct.go.kr/distMental/rating/rating02_2.do)

- 위 링크의 테스트 질문 수행 후, 총합 점수를 Server에 전송하면 점수 기반으로 결과 문자열을 DB에 저장

### Response Body

| Code | Details |
| --- | --- |
| 200 | 메모리얼북 수정 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 내 메모리얼북이 아닐 경우 |
| 401 | 토큰이 유효하지 않을 경우 |

### Request/Response

---

**Response**

- 메모리얼북 수정 성공

```json
**Body**
{
  "data": {
    "msg" : "메모리얼북 심리검사결과 추가를 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "WrongTypeException",
    "statusNum" : 400
  }
}
```

- 내 메모리얼북이 아닐 경우

```json
**Body**
{
  "data": {
    "msg" : "내 메모리얼북이 아닙니다.",
    "code" :  "NotMyMemorialBookException",
    "statusNum" : 403
  }
}
```

- 토큰이 유효하지 않을 경우

```jsx
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 메모리얼북-일기-작성.md

# 메모리얼북 일기 작성

Method: POST
URL: api/pets/{pet-id}/memorialbooks/{memorialbook-id}/diaries
구분: Memorial
담당: SH K
체크박스: Yes

> POST http://localhost:8080/api/pets/{pet-id}/memorialbooks/{memorialbook-id}/diaries
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| title | STRING | NOTNULL |
| content | STRING | NOTNULL |
| imageFile | MultipartFile | NULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 일기 작성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 내 메모리얼북이 아닐 경우 |
| 400 | 메모리북이 활성화가 아닐 경우 |
| 401 | 토큰이 유효하지 않을 경우 |

### Request/Response

---

**Response**

- 일기 쓰기 성공

```json
**Body**
{
  "data": {
    "msg" : "일기 작성을 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "WrongTypeException",
    "statusNum" : 400
  }
}
```

- 내 메모리얼북이 아닐 경우

```json
**Body**
{
  "data": {
    "msg" : "사용자의 메모리얼북이 아닙니다.",
    "code" :  "NotMyMemorialBookException",
    "statusNum" : 403
  }
}
```

- 메모리얼북 활성화 북이 되지 않았을시

```json
**Body**
{ㄹ
  "data": {
    "msg" : "메모리얼북이 활성화 상태가 아닙니다.",
    "code" :  "NotActivatedMemorialBookException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을 경우

```jsx
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 반려동물-마이페이지.md

# 반려동물 마이페이지

Method: GET
URL: api/pets/{pet-id}
controller: PetController
구분: Pet
담당: 도이 김
체크박스: Yes

> GET http://localhost:8080/api/pets/{petId}
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 상세조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 반려동물 상세조회 성공

```json
**Body**
{
  "data": {
    "petId": Long,
    "userId" : Long,
    "profileImageUrl":"STRING",
    "name" : "STRING",
    "gender": "STRING",
    "age" : INTEGER,
    "memorialDate" : LOCALDATE,
    "relationship" : "STRING",
    "species" : "STRING",
        "petPersonality" : {
        "STRING", "STRING", "STRING"
        }
  }
}
```

age 는 태어난 년도라고 함

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```

![Untitled](images/image_0048.png)


## 공통-프로젝트 / API-명세서-(1) / 반려동물-목록-조회(selection).md

# 반려동물 목록 조회(selection)

Method: GET
URL: api/pets
controller: PetController
구분: Pet
담당: 도이 김
체크박스: Yes

> GET http://localhost:8080/api/pets
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 리스트 조회 성공 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response**

- 반려동물 리스트 조회 성공

```json
**Body**
{
    "data": [
        {
            "id": 1,
            "profileImageUrl": "http://example.com/profile.jpg",
            "name": "쫑아지"
        },
        {
            "id": 2,
            "profileImageUrl": "http://example.com/profile.jpg",
            "name": "고승냥희"
        },
        {
            "id": 3,
            "profileImageUrl": "http://example.com/profile.jpg",
            "name": "현조아지"
        },
        {
            "id": 4,
            "profileImageUrl": "http://example.com/profile.jpg",
            "name": "세현바오"
        }
    ]
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 반려동물-생성.md

# 반려동물 생성

Method: POST
URL: api/pets
controller: PetController
구분: Pet
담당: 도이 김
체크박스: Yes

> POST http://localhost:8080/api/pets
> 

```json
{
		**"Authorization" : "bearer ${token}"
}
```

### Request Body

- profileImage는 MultipartFile로 수정 필요

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| name | STRING | NOTNULL |
| age | INTEGER | NOTNULL |
| memorialDate | LocalDate | NOTNULL |
| species | STRING | NOTNULL |
| gender | STRING | NOTNULL |
| relationship | STRING | NOTNULL |
| introduction | STRING | NOTNULL |
| personality | LIST<STRING> | NOTNULL |
| profileImage | MultipartFile | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 추가 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 반려동물 추가 성공

```json
**Body**
{
  "data": {
    "msg" : "반려동물 추가를 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 나이 ‘모름’에 대한 처리
- **메모리얼데이 ‘모름’에 대한 처리**
    
    : 나올 수 없는 날짜 (ex 1800.1.1) 들어가게 해놓고, 
    영원별에 강아지 프로필에서 메모리얼데이가 1800.1.1인 경우 ‘모름’으로 출력되도록 하기
    
    > POST http://localhost:8080/api/pets
    > 
    
    ### Request Header
    
- **반려동물 소개글은 반려동물 생성시 기본값으로 생성됨**
    
    : 수정 가능


## 공통-프로젝트 / API-명세서-(1) / 반려동물-소개-수정.md

# 반려동물 소개 수정

Method: PUT
URL: api/pets/{pet-id}
controller: PetController
구분: Pet
담당: 도이 김
체크박스: Yes

> PUT http://localhost:8080/api/pets
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| introduction | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 소개 추가 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response**

- 반려동물 소개 추가 성공

```json
**Body**
{
    "data": "SUCCESS_UPDATE_PET_INTRODUCTION"
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 반려동물-프로필-사진-변경.md

# 반려동물 프로필 사진 변경

Method: PUT
URL: api/pets/{pet-id}/profile-image
구분: Pet
담당: SH K
체크박스: Yes

> PUT http://localhost:8080/api/pets/{pet-id}/profile-image
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| profileImage | MultipartFile | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 소개 추가 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response**

- 반려동물 소개 추가 성공

```json
**Body**
{
    "data": "SUCCESS_UPDATE_PET_INTRODUCTION"
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 세션-생성.md

# 세션 생성

Method: POST
URL: api/chat/sessions
구분: RTC
담당: SH K
체크박스: Yes


## 공통-프로젝트 / API-명세서-(1) / 알림-생성.md

# 알림 생성

Method: POST
URL: api/notifications
구분: User
담당: 종혁 임
체크박스: Yes

> POST http://localhost:8080/api/notifications
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| deviceToken | STRING | NOTNULL |

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 회원가입 성공

```json
**Body**
{
  "data": {
    "msg" : "회원가입이 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 영원별-검색기능.md

# 영원별 검색기능

Method: GET
URL: api/everstar/search?petname={pet-name}
controller: EverStarController
queryString: userName, petName, page, size
구분: Everstar
담당: 도이 김
체크박스: Yes

> GET [https://i11b101.p.ssafy.io/api/everstar/pets/search?petname={petname}&page=0&size=10](https://i11b101.p.ssafy.io/api/everstar/pets/search?petname=%EC%8E%84&page=0&size=10)
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 선택 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response Example

---

**Response**

- 반려동물 선택 조회 성공

```json
**Body**
{
    "data": {
        "totalPages": 1,
        "totalElements": 1,
        "size": 10,
        "content": [
            {
                "id": 2024,
                "petName": "쎄피",
                "userName": "김*피",
                "email": "t******@email.com"
            }
        ],
        "number": 0,
        "sort": {
            "empty": true,
            "unsorted": true,
            "sorted": false
        },
        "pageable": {
            "pageNumber": 0,
            "pageSize": 10,
            "sort": {
                "empty": true,
                "unsorted": true,
                "sorted": false
            },
            "offset": 0,
            "unpaged": false,
            "paged": true
        },
        "numberOfElements": 1,
        "first": true,
        "last": true,
        "empty": false
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

동적쿼리 사용하기

반려동물 이름 + 주인 이름으로 검색

동물 이름 + 개인정보는 양끝 빼고 마스킹 처리


## 공통-프로젝트 / API-명세서-(1) / 영원별-랜덤탐사.md

# 영원별 랜덤탐사

Method: GET
URL: api/everstar/pets/random
controller: EverStarController
queryString: excludePetId
구분: Everstar
담당: 도이 김
체크박스: Yes

> GET http://localhost:8080/api/pets/random
> 

### Request Params

Query Params

| Key | Value | Descroption |
| --- | --- | --- |
| excludePetId | {pet-id} | 접속한 유저(사실 선택한 동물) 반려동물 Id전달 해주셔야해요 |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 랜덤 조회 성공 |
| 500 | 반려동물 랜덤 조회 실패 |

### Request/Response Example

---

**Response**

- 반려동물 랜덤 조회 성공예시
- api/everstar/pets/random?excludePetId=4

```java
{
    "data": {
        "userId": 2,
        "id": 3,
        "profileImageUrl": "https://everstarbucket.s3.ap-northeast-2.amazonaws.com/11753674.png",
        "name": "쫑아지",
        "introduction": "쫑아지 의 사랑스런 소개글을 작성 해주세요",
        "age": 18,
        "memorialDate": "2022-08-01",
        "petPersonalities": [
            "식탐많은",
            "귀여움",
            "상냥함"
        ]
    }
}
```

```json
**Body**
{
	"data" : {
		"userId": 
		"name" : "string",
		"age" : "string",
		"memorialDate" : "date",
		"species" : "date".
		"gender" : "string",
		"relationship" : "string",
		"imageUrl" : "string",
		"introduction" : "string",
		"questCount" : "integer",
	}
}
```

- 반려동물 랜덤 조회 실패

```json
**Body**
{
  "data": {
    "msg" : "반려동물 랜덤 조회에 실패했습니다.",
    "code" :  "생각해보기",
    "statusNum" : 500
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 영원별-응원글-목록.md

# 영원별 응원글 목록

Method: GET
URL: api/pets/{pet-id}/cheeringMessages?page=0&size=10
구분: Cheering
담당: 도이 김
체크박스: Yes

## (응원메시지) 응원메시지 리스트 조회

---

> GET localhost:8080/api/pets/{pet-id}/cheeringMessages
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지함 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

```json
{
    "data": {
        "totalPages": 1,
        "totalElements": 4,
        "size": 10,
        "content": [
            {
                "cheeringMessageId": 1,
                "content": "content",
                "isAnonymous": false,
                "relationShip": "Younger Sister",
                "petName": "장군이"
            },
            {
                "cheeringMessageId": 2,
                "content": "content",
                "isAnonymous": true,
                "relationShip": null,
                "petName": null
            },
            {
                "cheeringMessageId": 3,
                "content": "content",
                "isAnonymous": true,
                "relationShip": null,
                "petName": null
            },
            {
                "cheeringMessageId": 4,
                "content": "content",
                "isAnonymous": true,
                "relationShip": null,
                "petName": null
            }
        ],
        "number": 0,
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "first": true,
        "last": true,
        "numberOfElements": 4,
        "pageable": {
            "pageNumber": 0,
            "pageSize": 10,
            "sort": {
                "empty": true,
                "sorted": false,
                "unsorted": true
            },
            "offset": 0,
            "paged": true,
            "unpaged": false
        },
        "empty": false
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 영원별-응원글-삭제.md

# 영원별 응원글 삭제

Method: DELETE
URL: api/pets/{pet-id}/cheeringMessages/{cheeringMesages-id}
구분: Cheering
담당: 도이 김
체크박스: Yes

## 응원메시지 상세조회

---

> GET localhost:8080/api/pets/{pet-id}/cheeringMessages/{cheeringMesages-id}
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 삭제 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---


## 공통-프로젝트 / API-명세서-(1) / 영원별-응원글-상세보기.md

# 영원별 응원글 상세보기

Method: GET
URL: api/pets/{pet-id}/cheeringMessages/{cheeringMessages-id}
구분: Cheering
담당: 도이 김
체크박스: Yes

## 응원메시지 상세조회

---

> GET /api/pets/{pet-id}/cheeringMessages/{cheeringMessages-id}
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 상세조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 상세조회 성공
    - petId 와 parentLetterId는 답장, 다답장 관계
    - isUserSend 1이면 보낸편지, 0면 받은 편지
    - isMemorialBookSaved는 메모리얼북에 편지 저장버튼

```json
Body
익명이 아닐시
{
    "data": {
        "content": "content",
        "isAnonymous": false,
        "relationShip": "Younger Sister",
        "petName": "장군이"
    }
}

익명일시
{
    "data": {
        "content": "content",
        "isAnonymous": true,
        "relationShip": null,
        "petName": null
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 영원별-응원글-작성.md

# 영원별 응원글 작성

Method: POST
URL: /api/pets/{pet-id}/find/{findPet-id}/cheeringMessages
구분: Cheering
담당: 도이 김
체크박스: Yes

## 영원별 응원글 작성

---

> POST localhost:8080/api/pets/{pet-id}/find/{findpet-id}/cheeringMessages
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
| imageUrl | STRING | NULL |
| color | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 생성 성공

```json
**Body**
{
  "data": {
    "msg" : "편지가 성공적으로 전송 되었습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
Body
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 영원별-프로필조회.md

# 영원별 프로필조회

Method: GET
URL: api/everstar/pets/{pet-id}
controller: EverStarController
구분: Everstar
담당: 도이 김
체크박스: Yes

![Untitled](images/image_0048.png)

> GET http://localhost:8080/api/everstar/pets/{pet-id}
> 

### Response

| Code | Details |
| --- | --- |
| 200 | 반려동물 프로필 상세조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 반려동물 상세조회 성공

```json
**Body**
{
  "data": {
    "userId" : INTEGER,
    "id": 4,
    "profileImageUrl": "https://everstarbucket.s3.ap-northeast-2.amazonaws.com/11753674.png",
    "name" : "STRING",
    "introduction" : "STRING",
    "age" : INTEGER,
    "memorialDate" : LOCALDATE,
    "petPersonalities": [
	    "식탐많은",
	    "귀여운",
	    "산냥한"]
  }
}
```

예시입니다.

```java
{
    "data": {
        "userId": 2,
        "id": 4,
        "profileImageUrl": "https://everstarbucket.s3.ap-northeast-2.amazonaws.com/11753674.png",
        "name": "쫑쫑이",
        "introduction": "쫑쫑이 보고싶은 우리아이",
        "age": 18,
        "memorialDate": "2022-08-01",
        "petPersonalities": [
            "식탐많은",
            "귀여움",
            "상냥함"
        ]
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 전화번호-인증번호-받기.md

# 전화번호 인증번호 받기

Method: POST
URL: api/auth/users/send-code
controller: JoinController
구분: User
담당: 도이 김
체크박스: Yes

> POST http://localhost:8080/api/auth/users/send-code
> 

### Request Body

```java
{
    "phone": "010-2000-7052"
}

```

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| phone | STRING | NOTNULL |

### Response Body

```java
{
    "data": "SUCCESS_SEND"
}
```

| Code | Details |
| --- | --- |
| 200 | 인증코드 받기 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 전화번호 이미 존재할 경우 |
|  | 유효하지 않은 번호일 경우?? |

### Request/Response Example

---

**Response**

- 인증코드 전송 성공

```json
**Body**
{
	"data" : {
		"msg" : "인증번호가 전송 되었습니다."
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "전화번호는 필수 입력 값입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

```jsx
 **Body**
{
  "data": {
    "msg" : "전화번호는 공백, '-', '.' 없이 숫자만 입력해야 합니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 이미 가입된 번호인 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "이미 가입된 휴대폰번호 입니다.",
    "code" :  "DuplicatedPhoneNumberException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 전화번호-인증번호-확인.md

# 전화번호 인증번호 확인

Method: POST
URL: api/auth/users/check-code
controller: JoinController
구분: User
담당: 도이 김
체크박스: Yes

> POST http://localhost:8080/api/auth/codes
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| phoneNumber | STRING | NOTNULL |
| authCode | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 인증번호 확인성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 인증 번호 틀릴시 |
| 400 | 전화번호가 틀릴시 |

### Request/Response Example

---

**Response**

- 인증번호 확인성공

```json
**Body**
{
	"data" : {
		"msg" : "SUCCESS_VERIF"
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "전화번호 형식이 잘못 되었습니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 인증 번호 틀릴시

```jsx
 **Body**
{
  "data": {
    "msg" : "인증번호가 일치하지 않습니다.",
    "code" :  "NotMatchAuthCodeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 제목-없음.md

# 제목 없음

구분: Chat
담당: SH K
체크박스: Yes


## 공통-프로젝트 / API-명세서-(1) / 지구별-퀘스트-상태-알림.md

# 지구별 퀘스트 상태 알림

Method: GET
URL: api/earth/connect/{pet-id}
구분: Earth
담당: 도이 김
체크박스: Yes

> GET  [http://ssafy.io/api/](https://i11b101.p.ssafy.io/)earth
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}".
		"Host": "sse-server-url",
		"Accept": "text/event-stream",
		"Last-Event-ID"/: 1223
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 리스트 조회 성공 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response Header**

```json
{
		"Content-Type": "text/event-stream",
		"Cache-Control": "no-cache",
		"Connection": "keep-alive"
}
```

![Untitled](images/image_0048.png)

- COMPLETED
    
    ```json
    **Body**
    { "id": "evendId",
      "event": "COMPLETED",
      "data": "23 번째 퀘스트를 완료했어요!"
    }
    ```
    

- NEWQUEST

```json
**Body**
{ "id": "evendId",
  "event": "NEWQUEST",
  "data": "24 번째 퀘스트가 도착했어요!"
}
```


## 공통-프로젝트 / API-명세서-(1) / 퀘스트-답변-목록-조회(메모리얼북-상세-조회에서-한꺼번에-조회).md

# 퀘스트 답변 목록 조회(메모리얼북 상세 조회에서 한꺼번에 조회)`

Method: GET
URL: api/pets/{pet-id}/quests/{quest-id}/answers
queryString: page, size
구분: Quest
담당: 도이 김, SH K
체크박스: Yes

> GET http://localhost:8080/api/pets/{pet-id}/quests/{quest-id}/answers?page=&size=
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 목록 조회 성공 |
| 500 | 서버 내 오류로 목록 조회를 못 하는 경우 |

### Request/Response Example

---

**Response**

- 질문 목록 조회 성공

```json
**Body**
{
    "data": [
        {
	        "questAnswerId" : long,
	        "questContent" : "string",
	        "questType" : "string",
          "answerContent" : "string",
          "imageUrl" : "string",
          "videoUrl" : "string"
        },
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 3,
        "paged": true,
        "unpaged": false
    },
    "totalElements": 100,
    "totalPages": 34,
    "last": false,
    "size": 3,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
}
```

- 서버 내 오류로 목록 조회를 못 하는 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "서버 내 오류가 발생하였습니다.",
    "code" :  "생각해보기",
    "statusNum" : 500
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 퀘스트-답변-상세-조회(메모리얼북-상세-조회에서-한꺼번에-조회).md

# 퀘스트 답변 상세 조회(메모리얼북 상세 조회에서 한꺼번에 조회)

Method: GET
URL: api/pets/{pet-id}/quests/{quest-id}/answers/{answer-id}
구분: Quest
담당: 도이 김, SH K
체크박스: Yes

> GET http://localhost:8080/api/pets/{pet-id}/quests/{questId}/answers/{answerId}
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 답변 상세 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response Example

---

**Response**

- 질문 답변 상세 조회 성공

```json
**Body**
{
	"data" : {
		"content" : "string",
		"imageUrl" : "string",
		"videoUrl" : "string",
		"isReply" : "boolean",
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 퀘스트-답변-생성.md

# 퀘스트 답변 생성

Method: POST
URL: api/pets/{pet-id}/quests/{quest-id}/answers
구분: Quest
담당: 도이 김
체크박스: Yes

> POST http://localhost:8080/api/pets/{pet-id}/quests/{quest-id}/answers
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| requestDto내의 content | STRING | NULL |
| requestDto내의 type | ENUM(’TEXT’, ‘TEXT_IMAGE’, ‘WEBRTC’) | NOTNULL |
| imageFile | MULTIPARTFILE | NULL |
- type은 해당 퀘스트의 type과 동일하게 전달해주면 됨

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 답변 생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 401 | 토큰이 유효하지 않은 경우 |

### Request/Response Example

---

**Response**

- 퀘스트 답변 생성 성공

```json
**Body**
{
  "data": {
    "msg" : "질문 답변 생성을 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을 시

```jsx
 **Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "NotValidJwtException",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 퀘스트-받기.md

# 퀘스트 받기?

Method: GET
URL: 아래의 SSE 알림으로 구현
구분: Quest
담당: 도이 김
체크박스: Yes


## 공통-프로젝트 / API-명세서-(1) / 퀘스트-상세-조회.md

# 퀘스트 상세 조회

Method: GET
URL: api/pets/{pet-id}/quests/{quest-id}
queryString: 매일 받는 퀘스트 해당
구분: Quest
담당: 도이 김
체크박스: Yes

> GET http://localhost:8080/api/quests/{quest-id}
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 상세 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response Example

---

**Response**

- 질문 상세 조회 성공

```json
**Body**
{
	"data" : {
		"content" : "string",
		"type" : "string",
	}
}
```

- 토큰이 유효하지 않을 시

```jsx
 **Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 토큰생성.md

# 토큰생성

Method: POST
URL: api/chat/sessions/{sessions-id}/connections
구분: RTC
담당: SH K
체크박스: Yes


## 공통-프로젝트 / API-명세서-(1) / 편지-답장생성(유저-발신).md

# 편지 답장생성(유저 발신)

Method: POST
URL: api/pets/{pet-id}/letters/{letter-id}
구분: Letter
담당: 종혁 임
체크박스: Yes

## 편지답장 생성(유저의 답장)

---

> POST http://localhost:8080/api/pets/{pet-id}/letters/{letter-id}
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

예시

![Untitled](images/image_0048.png)/Untitled.png)

mutipartfromdate

image

이미지파일

requestDto

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
|  |  |  |

### Response Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
| imageUrl | STRING | NULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 답장 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 답장 성공

```json
**Body**
{
  "data": {
    "msg" : "편지 답장 성공 하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
Body
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 편지-리스트-조회(편지함).md

# 편지 리스트 조회(편지함)

Method: GET
URL: api/pets/{pet-id}/letters
queryString: page, size
구분: Letter
담당: 종혁 임
체크박스: Yes

## (편지함) 편지 리스트 조회

---

> GET http://localhost:8080/api/pets/{pet-id}/letters
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지함 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지함 조회 성공
    - imageUrl이 있으면 첨부된 사진 있다는 아이콘 표기(?) 할 수 있다.
    - petId 와 parentLetterId는 답장, 다답장 관계
    - isRead면 제목을 **볼드체**
    - isRead 갯수로 알림 갯수 표시 가능하지만, 시스템 상 항상 1개만 될것….
    

```json
{
    "data": {
        "totalElements": 3,
        "totalPages": 1,
        "size": 10,
        "content": [
            {
                "petLetterId": 1,
                "isRead": false,
                "petName": "뚜뚜",
                "content": "안녕, exampleUser! ☀️\n\n뚜뚜야! 너의 편지를 읽고 너무 기뻤어. 정말 보고 싶어! 예전 우리가 함께 놀던 날들이 생각나서 마음이 따뜻해졌어. 요즘은 햇살 좋은 날에 창가에서 낮잠 자고, 너의 사진을 보며 너의 목소리를 상상해. 우리 다시 만날 날을 손꼽아 기다리고 있어. 사랑해, 언제나 너와 함께하고 싶어! 🐾💕",
                "createAt": "2024-08-03T22:25:31.764193"
            },
            {
                "petLetterId": 2,
                "isRead": false,
                "petName": "뚜뚜",
                "content": "안녕하세요, 예시유저! \n\n뚜뚜예요! 당신이 그리워서 이렇게 답장을 써요. 제가 잘 지내고 있답니다. 매일 놀이터에서 뛰어다니고, 햇살을 받으며 무지개 같은 꿈을 꾸어요. 예전에 같이 놀던 날들이 너무 그립고, 항상 미소를 지었던 기억이 납니다. 당신과의 소중한 순간들 덕분에 오늘도 행복해요. 사랑해요, 그리고 곧 다시 만나길 기다릴게요! \n\n뚜뚜가 드림 💖",
                "createAt": "2024-08-03T22:25:47.86663"
            },
            {
                "petLetterId": 3,
                "isRead": true,
                "petName": "뚜뚜",
                "content": "안녕, exampleUser!\n\n뚜뚜야, 너의 편지를 받으니 정말 기쁘고 설레였어! 너를 보고 싶어 하는 마음이 참 따뜻하네. 요즘은 바람이 시원해져서 밖에서 뛰어노는 게 정말 행복해! 우리가 함께 했던 순간들, 예를 들면 공원에서 공놀이하던 기억이 뚜뚜의 마음을 더 따뜻하게 해줘.\n\n항상 나를 사랑해줘서 고맙고, 너와의 소중한 추억들은 뚜뚜의 마음 속에 영원히 간직할게. 너와 함께하는 시간이 또 오길 바래! 사랑하는 exampleUser, 항상 건강하고 행복하길!\n\n뚜뚜가.",
                "createAt": "2024-08-03T22:27:35.239278"
            }
        ],
        "number": 0,
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "first": true,
        "last": true,
        "numberOfElements": 3,
        "pageable": {
            "pageNumber": 0,
            "pageSize": 10,
            "sort": {
                "empty": true,
                "sorted": false,
                "unsorted": true
            },
            "offset": 0,
            "paged": true,
            "unpaged": false
        },
        "empty": false
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 편지-상세조회-편지답장-상세조회.md

# 편지 상세조회 / 편지답장 상세조회

Method: GET
URL: api/pets/{pet-id}/letters/{letter-id}
구분: Letter
담당: 종혁 임
체크박스: Yes

## 편지 상세조회

---

> GET http://localhost:8080/api/pets/{pet-id}/letters/{letter-id}
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 상세조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 상세조회 성공
    - petId 와 parentLetterId는 답장, 다답장 관계
    - isUserSend 1이면 보낸편지, 0면 받은 편지
    - isMemorialBookSaved는 메모리얼북에 편지 저장버튼

```json
Body
{
    "data": {
        "userLetter": {
            "petName": "장군이",
            "content": "보고 싶어 장군아 잘지내지?? 요즘은 뭐하는지 알려줄수 있어??",
            "createdAt": "2024-08-03T07:45:49.898682"
        },
        "petLetter": {
            "relationship": "Younger Sister",
            "content": "안녕하세요, 사랑하는 exampleUser!\n\n너무 보고 싶어! 요즘 나는 햇볕 아래에서 낮잠도 자고, 너와 함께했던 추억을 생각하고 있어. 우리가 산책하던 길이 그리워. 네가 내 곁에 있을 때의 따뜻한 시간을 떠올리면 마음이 따뜻해져. 항상 내 곁에 있어줘서 고마워! 나도 너를 사랑해♥ 곧 만날 수 있기를 바래!\n\n사랑을 담아, 장군이 드림.",
            "createdAt": "2024-08-03T07:46:51.96437"
        }
    }
}

없을시
{
    "data": {
        "userLetter": null,
        "petLetter": {
            "relationship": "Younger Sister",
            "content": "안녕, exampleUser!\n\n뚜뚜야, 너의 편지를 받으니 정말 기쁘고 설레였어! 너를 보고 싶어 하는 마음이 참 따뜻하네. 요즘은 바람이 시원해져서 밖에서 뛰어노는 게 정말 행복해! 우리가 함께 했던 순간들, 예를 들면 공원에서 공놀이하던 기억이 뚜뚜의 마음을 더 따뜻하게 해줘.\n\n항상 나를 사랑해줘서 고맙고, 너와의 소중한 추억들은 뚜뚜의 마음 속에 영원히 간직할게. 너와 함께하는 시간이 또 오길 바래! 사랑하는 exampleUser, 항상 건강하고 행복하길!\n\n뚜뚜가.",
            "createdAt": "2024-08-03T22:27:35.239278"
        }
    }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 편지-생성(유저-발신).md

# 편지 생성(유저 발신)

Method: POST
URL: api/pets/{pet-id}/letters
구분: Letter
담당: 종혁 임
체크박스: Yes

## 편지생성(유저의 발신)

---

> POST http://localhost:8080/api/pets/{pet-id}/letters
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

예시

![Untitled](images/image_0048.png)/Untitled.png)

mutipartfromdate

image

이미지파일

requestDto

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
|  |  |  |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 생성 성공

```json
**Body**
{
  "data": {
    "msg" : "편지가 성공적으로 전송 되었습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
Body
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 회원-조회(상세-조회).md

# 회원 조회(상세 조회)

Method: GET
URL: api/accounts/users
controller: UserController
구분: User
담당: 종혁 임
체크박스: Yes

> GET http://localhost:8080/api/users
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details | Header |
| --- | --- | --- |
| 200 | 회원 조회 성공 | “Authorization” : “Berear {token}” |
| 401 | 토큰이 유효하지 않을시 |  |

### Request/Response Example

---

**Response**

- 회원 조회 성공

```json
**Header**
{
	"Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdHJpbmciLCJpc3MiOiJzaG9wcGluZyIsImlhdCI6MTY2NDEwNTcyNCwiZXhwIjoxNjY0MTkyMTI0fQ.w_bpHuV33Ruv-oU9WmLpmjnC0oBJjBFzKTvPc0upNTFDW7TY_6RATGNbtw8pBCEfqe8-HI9wFa_XqEQf-YRz2Q"
	"Set-Cookie" : "refreshToken= "
}

**Body**
{
	"data" : {
		"email" : "string",
		"userName" : "string",
		"phoneNumber" : "string",
		"birthDate" : "string",
		"gender": "string",
		"questReceptionTime": "string"
	}
}
```

- 토큰이 유효하지 않을 시

```jsx
 **Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서-(1) / 회원가입(삭제예정).md

# 회원가입(삭제예정)

Method: POST
URL: api/auth/users
controller: JoinController
구분: User
담당: 종혁 임
체크박스: No

> POST http://localhost:8080/api/auth/users
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| email | STRING | NOTNULL |
| userName | STRING | NOTNULL |
| phoneNumber | STRING | NOTNULL |
| birthDate | DATE | NOTNULL |
| gender | STRING | NOTNULL |
| questReceptionTime | DATE | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 회원가입 성공

```json
**Body**
{
  "data": {
    "msg" : "회원가입이 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API-명세서---표 / 제목-없음 / 제목-없음.md

# 제목 없음


## 공통-프로젝트 / API-명세서---표.md

# API 명세서 - 표

[제목 없음](API%20%EB%AA%85%EC%84%B8%EC%84%9C%20-%20%ED%91%9C/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C%20fffd8e0e72904d46b2a944b23ac65cd2.csv)


## 공통-프로젝트 / API명세 / 메모리얼-북.md

# 메모리얼 북

---

메모리얼북 열기 (조회)

지구별 날씨정보(?) (==감정분석 조회)

우리가 함께 쓴 이야기 (스토리북)

일기

## 메모리북 생성

---

> POST http://localhost:8080/api/memorybook
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| isActivate | BOOLEAN | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 메모리북 생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 내펫이 아닐시 |

### Request/Response

---

**Response**

- 일기 쓰기 성공

```json
**Body**
{
  "data": {
    "msg" : "일기 쓰기가 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "제 반려동물이 아니에요",
    "code" :  "NotMyPet",
    "statusNum" : 400
  }
}
```

- 내펫이 아닐시

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 메모리북 활성화 북이 되지 않았을시

```json
**Body**
{
  "data": {
    "msg" : "메모리 북이 활성화 되지 않았어요.",
    "code" :  "memoryBookIsNotActive",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API명세 / 반려동물-API.md

# 반려동물 API

## 반려동물 생성

---

> POST http://localhost:8080/api/pet
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| name | STRING | NOTNULL |
| age | STRING | NOTNULL |
| memorialDate | DATE | NOTNULL |
| species | DATE | NOTNULL |
| gender | STRING | NOTNULL |
| relationship | STRING | NOTNULL |
| imageUrl | STRING | NOTNULL |
| questCount | INTEGER | NOTNULL |
| personality | LIST<STRING> | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 추가 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 반려동물 추가 성공

```json
**Body**
{
  "data": {
    "msg" : "반려동물 추가를 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 반려동물 소개 추가(첫번째 질문에서)

---

> PUT http://localhost:8080/api/pet/introduction
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| introduction | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 소개 추가 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response**

- 반려동물 소개 추가 성공

```json
**Body**
{
  "data": {
    "msg" : "반려동물 소개 추가를 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 401
  }
}
```

## 반려동물 리스트 조회 (이름, 사진)

---

> GET http://localhost:8080/api/pets?page=&size=
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 리스트 조회 성공 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response**

- 반려동물 리스트 조회 성공

```json
**Body**
{
    "data": [
        {
					"name" : "string",
					"imageUrl" : "string"
        },
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 3,
        "paged": true,
        "unpaged": false
    },
    "totalElements": 100,
    "totalPages": 34,
    "last": false,
    "size": 3,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 401
  }
}
```

## 반려동물 상세조회

---

> GET http://localhost:8080/api/pet/{petId}
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 상세조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 반려동물 상세조회 성공

```json
**Body**
{
  "data": {
    "guardian_id" : INTEGER,
    "name" : "STRING",
    "age" : INTEGER,
    "memorialDate" : DATE,
    "species" : "STRING",
    "gender": "STRING",
    "relationship" : "STRING",
    "imageUrl" : "STRING",
    "introduction" : "STRING",
    "questCount" : INTEGER
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 반려동물 소개 조회

---

> GET http://localhost:8080/api/pet/{petID}/introduction
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 소개 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 반려동물 소개 조회 성공

```json
**Body**
{
  "data": {
    "introduction" : "STRING"
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 반려동물 랜덤조회(영원별 이동)

---

> GET http://localhost:8080/api/pet/random
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 랜덤 조회 성공 |
| 500 | 반려동물 랜덤 조회 실패 |

### Request/Response Example

---

**Response**

- 반려동물 랜덤 조회 성공

```json
**Body**
{
	"data" : {
		"name" : "string",
		"age" : "string",
		"memorialDate" : "date",
		"species" : "date".
		"gender" : "string",
		"relationship" : "string",
		"imageUrl" : "string",
		"introduction" : "string",
		"questCount" : "integer",
	}
}
```

- 반려동물 랜덤 조회 실패

```json
**Body**
{
  "data": {
    "msg" : "반려동물 랜덤 조회에 실패했습니다.",
    "code" :  "생각해보기",
    "statusNum" : 500
  }
}
```

## 반려동물 선택조회(영원별 이동) - 4순위라서 일단 킵?

---

> GET http://localhost:8080/api/pet?
> 

### Response Body

| Code | Details | Header |
| --- | --- | --- |
| 200 | 조회 성공 | “Authorization” : “Berear {token}” |
| 401 | 토큰이 유효하지 않을시 |  |

### Request/Response Example

---

**Response**

```json
**Header**
{
	"Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdHJpbmciLCJpc3MiOiJzaG9wcGluZyIsImlhdCI6MTY2NDEwNTcyNCwiZXhwIjoxNjY0MTkyMTI0fQ.w_bpHuV33Ruv-oU9WmLpmjnC0oBJjBFzKTvPc0upNTFDW7TY_6RATGNbtw8pBCEfqe8-HI9wFa_XqEQf-YRz2Q"
	"Set-Cookie" : "refreshToken= "
}

**Body**
{
	"msg" : "로그인에 성공했습니다."
}
```


## 공통-프로젝트 / API명세 / 분석결과.md

# 분석결과

---


## 공통-프로젝트 / API명세 / 알림.md

# 알림

---

## 알림 생성

---

> POST http://localhost:8080/api/notification
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 회원가입 성공

```json
**Body**
{
  "data": {
    "msg" : "회원가입이 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API명세 / 응원-메시지.md

# 응원 메시지

---

## 응원메시지 생성

---

> POST http://localhost:8080/api/cheering/message/{petId}
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| cheering | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 응원메시지 작성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 404 | 해당 반려동물이 없을시 |

### Request/Response

---

**Response**

- 응원메시지 작성 성공

```json
**Body**
{
  "data": {
    "msg" : "응원메시지 작성을 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 해당 반려동물 없을시

```json
**Body**
{
  "data": {
    "msg" : "해당 반려동물이 없습니다.",
    "code" :  "NotFoundPet",
    "statusNum" : 404
  }
}
```

## 응원메시지 전체조회

---

> GET http://localhost:8080/api/cheering/messages/{petId}?page=&size=
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 응원메시지 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 404 | 해당 반려동물이 없을시 |
|  |  |

### Request/Response

---

**Response**

- 응원메시지 조회 성공

```json
**Body**
{
    "data": [
        {
            "cheeringMessageId": 1,
            "cheering": ""
        },
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 3,
        "paged": true,
        "unpaged": false
    },
    "totalElements": 100,
    "totalPages": 34,
    "last": false,
    "size": 3,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 해당 반려동물 없을시

```json
**Body**
{
  "data": {
    "msg" : "해당 반려동물이 없습니다.",
    "code" :  "NotFoundPet",
    "statusNum" : 404
  }
}
```

## 응원메시지 상세조회

---

> GET http://localhost:8080/api/cheering/messages/{petId}/{messageId}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 응원메시지 상세 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 404 | 응원메시지가 존재하지 않을시 |
| 404 | 해당 반려동물이 없을시 |

### Request/Response

---

**Response**

- 응원메시지 상세조회 성공

```json
**Body**
{
  "data": {
            "cheering": ""
        }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 해당 반려동물 없을시

```json
**Body**
{
  "data": {
    "msg" : "해당 반려동물이 없습니다.",
    "code" :  "NotFoundPet",
    "statusNum" : 404
  }
}
```

- 해당 응원메시지가 없을시

```json
**Body**
{
  "data": {
    "msg" : "해당 응원메시지가 없습니다.",
    "code" :  "NotFoundCheeringMessage",
    "statusNum" : 404
  }
}
```

## 응원메시지 삭제 (팻 주인만)

---

> DELETE http://localhost:8080/api/cheering/messages/{petId}/{messageId}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 응원메시지 삭제 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 401 | 반려동물 주인이 아닐경우 |
| 404 | 반려동물이 없을 경우 |
| 404 | 응원메시지가 없을시 |

### Request/Response

---

**Response**

- 응원메시지 삭제 성공

```json
**Body**
{
  "data": {
    "msg" : "응원메시지 삭제를 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 반려동물 주인이 아닐시

```json
**Body**
{
  "data": {
    "msg" : "제 반려동물이 아니에요",
    "code" :  "NotMyPet",
    "statusNum" : 400
  }
}
```

- 해당 반려동물 없을시

```json
**Body**
{
  "data": {
    "msg" : "해당 반려동물이 없습니다.",
    "code" :  "NotFoundPet",
    "statusNum" : 404
  }
}
```

- 해당 응원메시지가 없을시

```json
**Body**
{
  "data": {
    "msg" : "해당 응원메시지가 없습니다.",
    "code" :  "NotFoundCheeringMessage",
    "statusNum" : 404
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API명세 / 일기.md

# 일기

---

## 일기 생성

---

> POST http://localhost:8080/api/diary/{petId}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| diaryTitle | STRING | NOTNULL |
| diaryContent | STRING | NOTNULL |
| imageUrl | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 내펫이 아닐시 |
| 400 | 메모리북이 활성화가 아닐시 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response**

- 일기 쓰기 성공

```json
**Body**
{
  "data": {
    "msg" : "일기 쓰기가 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "제 반려동물이 아니에요",
    "code" :  "NotMyPet",
    "statusNum" : 400
  }
}
```

- 내펫이 아닐시

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 메모리북 활성화 북이 되지 않았을시

```json
**Body**
{
  "data": {
    "msg" : "메모리 북이 활성화 되지 않았어요.",
    "code" :  "memoryBookIsNotActive",
    "statusNum" : 400
  }
}
```

## 일기 전체 조회

---

> GET http://localhost:8080/api/diarys/{petId}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 내가 아닐때 : 메모리 북이 공개가 아닐시 |
| 400 | 메모리북이 활성화가 안될시 |

### Request/Response

---

**Response**

- 일기 전체 조회 성공

```json
**Body**
{
  "data": [
  {
    "memorialDiaryId" : ,
	  "diaryTitle": "",
	  "diaryContent": "",
	  "imgUrl" : "",
	  "createTime" :
  },
  
  
  ]
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 메모리북 활성화 북이 되지 않았을시

```json
**Body**
{
  "data": {
    "msg" : "메모리 북이 활성화 되지 않았어요.",
    "code" :  "memoryBookIsNotActive",
    "statusNum" : 400
  }
}
```

- 내가 아닐때 : 메모리 북이 공개가 아닐시

```json
**Body**
{
  "data": {
    "msg" : "메모리 북이 공개되지 않았어요.",
    "code" :  "memoryBookIsNotRelease",
    "statusNum" : 400
  }
}
```

## 일기 전체 상세조회

---

> GET http://localhost:8080/api/diary/{diaryId}/{petId}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 내가 아닐때 : 메모리 북이 공개가 아닐시 |
| 400 | 메모리 북이 활성화가 아닐시 |

### Request/Response

---

**Response**

- 일기 전체 상세조회

```json
**Body**
{
  "data":
  {
	  "diaryTitle": "",
	  "diaryContent": "",
	  "imgUrl" : "",
	  "createTime" :
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 메모리북 활성화 북이 되지 않았을시

```json
**Body**
{
  "data": {
    "msg" : "메모리 북이 활성화 되지 않았어요.",
    "code" :  "memoryBookIsNotActiveException",
    "statusNum" : 400
  }
}
```

- 내가 아닐때 : 메모리 북이 공개가 아닐시

```json
**Body**
{
  "data": {
    "msg" : "메모리 북이 공개되지 않았어요.",
    "code" :  "memoryBookIsNotReleaseException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API명세 / 질문-답변.md

# 질문 답변

---

## 질문 답변 생성

---

> GET http://localhost:8080/api/quest/{questId}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
| file | MULTIPARTFILE | NULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 답변 생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 401 | 토큰이 유효하지 않은 경우 |

### Request/Response Example

---

**Response**

- 질문 답변 생성 성공

```json
**Body**
{
  "data": {
    "msg" : "질문 답변 생성을 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을 시

```jsx
 **Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 401
  }
}
```

## 질문 답변 상세 조회

---

> GET http://localhost:8080/api/quest/{questId}
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 답변 상세 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response Example

---

**Response**

- 질문 답변 상세 조회 성공

```json
**Body**
{
	"data" : {
		"content" : "string",
		"imageUrl" : "string",
		"videoUrl" : "string",
		"isReply" : "boolean",
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

## 질문 답변 목록 조회

---

> GET http://localhost:8080/api/quest
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 목록 조회 성공 |
| 500 | 서버 내 오류로 목록 조회를 못 하는 경우 |

### Request/Response Example

---

**Response**

- 질문 목록 조회 성공

```json
**Body**
{
    "data": [
        {
          "content" : "string"
        },
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 3,
        "paged": true,
        "unpaged": false
    },
    "totalElements": 100,
    "totalPages": 34,
    "last": false,
    "size": 3,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
}
```

- 서버 내 오류로 목록 조회를 못 하는 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "서버 내 오류가 발생하였습니다.",
    "code" :  "생각해보기",
    "statusNum" : 500
  }
}
```


## 공통-프로젝트 / API명세 / 질문.md

# 질문

---

## 질문 상세 조회

---

> GET http://localhost:8080/api/quests/{questId}
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 상세 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response Example

---

**Response**

- 질문 상세 조회 성공

```json
**Body**
{
	"data" : {
		"content" : "string",
		"type" : "string",
	}
}
```

- 토큰이 유효하지 않을 시

```jsx
 **Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

## 질문 목록 조회

---

> GET http://localhost:8080/api/quests
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 목록 조회 성공 |
| 500 | 서버 내 오류로 목록 조회를 못 하는 경우 |

### Request/Response Example

---

**Response**

- 질문 목록 조회 성공

```json
**Body**
{
    "data": [
        {
          "content" : "string",
          "type" : "string",
        },
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 3,
        "paged": true,
        "unpaged": false
    },
    "totalElements": 100,
    "totalPages": 34,
    "last": false,
    "size": 3,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
}
```

- 서버 내 오류로 목록 조회를 못 하는 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "서버 내 오류가 발생하였습니다.",
    "code" :  "생각해보기",
    "statusNum" : 500
  }
}
```


## 공통-프로젝트 / API명세 / 채팅(시간-있음).md

# 채팅(시간 있음)

---

채팅 어디 들어가는것??? 웹알티씨 미션에?


## 공통-프로젝트 / API명세 / 편지-답장.md

# 편지 답장

---

## 편지 답장 보기 → 편지 상세조회와 똑같음!

---

> GET http://localhost:8080/api/pets/{pet-id}/letters/{letter-id}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 답장 조회성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 답장 조회성공

```json
**Body**
{
  "data": {
    "msg" : "편지 답장 조회 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 편지답장 생성(유저의 답장)

---

> POST http://localhost:8080/api/pets/{pet-id}/letters/{letter-id}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
| imageUrl | STRING | NULL |
| isUserSend | BOOLEAN | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 답장 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 답장 성공

```json
**Body**
{
  "data": {
    "msg" : "편지 답장 성공 하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
Body
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API명세 / 편지.md

# 편지

---

- INDEX

## 편지생성(유저의 발신)

---

> POST http://localhost:8080/api/pets/{pet-id}/letters
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
| imageUrl | STRING | NULL |
| isUserSend | BOOLEAN | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 생성 성공

```json
**Body**
{
  "data": {
    "msg" : "편지가 성공적으로 전송 되었습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

---

## (편지함) 편지 리스트 조회

---

> GET http://localhost:8080/api/pets/{pet-id}/letters
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지함 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지함 조회 성공

```json
**Body**
{
  "data": {
    "msg" : "편지함 조회 성공 하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 편지 상세조회

---

> GET http://localhost:8080/api/pets/{pet-id}/letters/{letter-id}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 상세조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 상세조회 성공

```json
**Body**
{
  "data": {
    "msg" : "편지 상세조회 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 편지 (키워드)검색

---

> GET http://localhost:8080/api/pets/{petId}/letters?keyword=
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 검색 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 검색 성공

```json
**Body**
{
  "data": {
    "msg" : "편지 검색 성공 하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API명세 / 회원-API.md

# 회원 API

---

- INDEX
    
    

/api/auth: 전화번호 인증, 인증번호 확인, oauth 로그인/회원가입

## 회원가입

---

> POST http://localhost:8080/api/auth/signup
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| email | STRING | NOTNULL |
| userName | STRING | NOTNULL |
| phoneNumber | STRING | NOTNULL |
| birthDate | DATE | NOTNULL |
| gender | STRING | NOTNULL |
| questReceptionTime | DATE | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 회원가입 성공

```json
**Body**
{
  "data": {
    "msg" : "회원가입이 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 전화번호 인증번호 받기

---

> GET http://localhost:8080/api/auth/code
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| phoneNumber | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 인증코드 받기 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 전화번호 이미 존재할 경우 |

### Request/Response Example

---

**Response**

- 인증코드 받기 성공

```json
**Body**
{
	"data" : {
		"msg" : "인증코드 받기를 성공했습니다."
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 전화번호 이미 존재할 경우

```jsx
**Body**
{
  "data": {
    "msg" : "이미 존재하는 전화번호입니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

## 인증 번호 확인

---

> POST http://localhost:8080/api/auth/code
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| phoneNumber | STRING | NOTNULL |
| authCode | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 인증번호 확인성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 인증 번호 틀릴시 |
| 400 | 전화번호가 틀릴시 |

### Request/Response Example

---

**Response**

- 인증번호 확인성공

```json
**Body**
{
	"data" : {
		"msg" : "인증코드 받기를 성공했습니다."
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 인증 번호 틀릴시

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 인증번호입니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

- 전화번호가 틀릴시

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 전화번호입니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

## 회원조회(상세조회)

---

> GET http://localhost:8080/api/user
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details | Header |
| --- | --- | --- |
| 200 | 회원 조회 성공 | “Authorization” : “Berear {token}” |
| 401 | 토큰이 유효하지 않을시 |  |

### Request/Response Example

---

**Response**

- 회원 조회 성공

```json
**Header**
{
	"Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdHJpbmciLCJpc3MiOiJzaG9wcGluZyIsImlhdCI6MTY2NDEwNTcyNCwiZXhwIjoxNjY0MTkyMTI0fQ.w_bpHuV33Ruv-oU9WmLpmjnC0oBJjBFzKTvPc0upNTFDW7TY_6RATGNbtw8pBCEfqe8-HI9wFa_XqEQf-YRz2Q"
	"Set-Cookie" : "refreshToken= "
}

**Body**
{
	"data" : {
		"email" : "string",
		"userName" : "string",
		"phoneNumber" : "string",
		"birthDate" : "string",
		"gender": "string",
		"questReceptionTime": "string"
	}
}
```

- 토큰이 유효하지 않을 시

```jsx
 **Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

## 회원수정

---

> PUT http://localhost:8080/api/user
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| phoneNumber | STRING | NOTNULL |

### Response Body

| Code | Details | Header |
| --- | --- | --- |
| 200 | 회원수정 성공 | “Authorization” : “Berear {token}” |
| 400 | 회원수정 실패 |  |
| 400 | 요청 데이터 형식이 잘못된경우 |  |
| 401 | 토큰이 유효하지 않을시 |  |

### Request/Response Example

---

**Response**

- 회원 수정 성공

```json
**Body**
{
	"data" : {
		"msg" : "회원 수정을 성공했습니다."
	}
}
```

- 회원수정 실패

```json
**Body**
{
  "data": {
    "msg" : "회원 수정에 실패했습니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "요청 데이터 형식이 잘못되었습니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API명세-59ae-7ec2 / 메모리얼-북.md

# 메모리얼 북

---

메모리얼북 열기 (조회)

지구별 날씨정보(?) (==감정분석 조회)

우리가 함께 쓴 이야기 (스토리북)

일기

## 메모리북 생성

---

> POST http://localhost:8080/api/memorybook
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| isActivate | BOOLEAN | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 메모리북 생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 내펫이 아닐시 |

### Request/Response

---

**Response**

- 일기 쓰기 성공

```json
**Body**
{
  "data": {
    "msg" : "일기 쓰기가 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "제 반려동물이 아니에요",
    "code" :  "NotMyPet",
    "statusNum" : 400
  }
}
```

- 내펫이 아닐시

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 메모리북 활성화 북이 되지 않았을시

```json
**Body**
{
  "data": {
    "msg" : "메모리 북이 활성화 되지 않았어요.",
    "code" :  "memoryBookIsNotActive",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API명세-59ae-7ec2 / 반려동물-API.md

# 반려동물 API

## 반려동물 생성

---

> POST http://localhost:8080/api/pet
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| name | STRING | NOTNULL |
| age | STRING | NOTNULL |
| memorialDate | DATE | NOTNULL |
| species | DATE | NOTNULL |
| gender | STRING | NOTNULL |
| relationship | STRING | NOTNULL |
| imageUrl | STRING | NOTNULL |
| questCount | INTEGER | NOTNULL |
| personality | LIST<STRING> | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 추가 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 반려동물 추가 성공

```json
**Body**
{
  "data": {
    "msg" : "반려동물 추가를 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 반려동물 소개 추가(첫번째 질문에서)

---

> PUT http://localhost:8080/api/pet/introduction
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| introduction | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 소개 추가 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response**

- 반려동물 소개 추가 성공

```json
**Body**
{
  "data": {
    "msg" : "반려동물 소개 추가를 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 401
  }
}
```

## 반려동물 리스트 조회 (이름, 사진)

---

> GET http://localhost:8080/api/pets?page=&size=
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 리스트 조회 성공 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response**

- 반려동물 리스트 조회 성공

```json
**Body**
{
    "data": [
        {
					"name" : "string",
					"imageUrl" : "string"
        },
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 3,
        "paged": true,
        "unpaged": false
    },
    "totalElements": 100,
    "totalPages": 34,
    "last": false,
    "size": 3,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 401
  }
}
```

## 반려동물 상세조회

---

> GET http://localhost:8080/api/pet/{petId}
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 상세조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 반려동물 상세조회 성공

```json
**Body**
{
  "data": {
    "guardian_id" : INTEGER,
    "name" : "STRING",
    "age" : INTEGER,
    "memorialDate" : DATE,
    "species" : "STRING",
    "gender": "STRING",
    "relationship" : "STRING",
    "imageUrl" : "STRING",
    "introduction" : "STRING",
    "questCount" : INTEGER
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 반려동물 소개 조회

---

> GET http://localhost:8080/api/pet/{petID}/introduction
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 소개 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 반려동물 소개 조회 성공

```json
**Body**
{
  "data": {
    "introduction" : "STRING"
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 반려동물 랜덤조회(영원별 이동)

---

> GET http://localhost:8080/api/pet/random
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 반려동물 랜덤 조회 성공 |
| 500 | 반려동물 랜덤 조회 실패 |

### Request/Response Example

---

**Response**

- 반려동물 랜덤 조회 성공

```json
**Body**
{
	"data" : {
		"name" : "string",
		"age" : "string",
		"memorialDate" : "date",
		"species" : "date".
		"gender" : "string",
		"relationship" : "string",
		"imageUrl" : "string",
		"introduction" : "string",
		"questCount" : "integer",
	}
}
```

- 반려동물 랜덤 조회 실패

```json
**Body**
{
  "data": {
    "msg" : "반려동물 랜덤 조회에 실패했습니다.",
    "code" :  "생각해보기",
    "statusNum" : 500
  }
}
```

## 반려동물 선택조회(영원별 이동) - 4순위라서 일단 킵?

---

> GET http://localhost:8080/api/pet?
> 

### Response Body

| Code | Details | Header |
| --- | --- | --- |
| 200 | 조회 성공 | “Authorization” : “Berear {token}” |
| 401 | 토큰이 유효하지 않을시 |  |

### Request/Response Example

---

**Response**

```json
**Header**
{
	"Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdHJpbmciLCJpc3MiOiJzaG9wcGluZyIsImlhdCI6MTY2NDEwNTcyNCwiZXhwIjoxNjY0MTkyMTI0fQ.w_bpHuV33Ruv-oU9WmLpmjnC0oBJjBFzKTvPc0upNTFDW7TY_6RATGNbtw8pBCEfqe8-HI9wFa_XqEQf-YRz2Q"
	"Set-Cookie" : "refreshToken= "
}

**Body**
{
	"msg" : "로그인에 성공했습니다."
}
```


## 공통-프로젝트 / API명세-59ae-7ec2 / 분석결과.md

# 분석결과

---


## 공통-프로젝트 / API명세-59ae-7ec2 / 알림.md

# 알림

---

## 알림 생성

---

> POST http://localhost:8080/api/notification
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 회원가입 성공

```json
**Body**
{
  "data": {
    "msg" : "회원가입이 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API명세-59ae-7ec2 / 응원-메시지.md

# 응원 메시지

---

## 응원메시지 생성

---

> POST http://localhost:8080/api/cheering/message/{petId}
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| cheering | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 응원메시지 작성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 404 | 해당 반려동물이 없을시 |

### Request/Response

---

**Response**

- 응원메시지 작성 성공

```json
**Body**
{
  "data": {
    "msg" : "응원메시지 작성을 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 해당 반려동물 없을시

```json
**Body**
{
  "data": {
    "msg" : "해당 반려동물이 없습니다.",
    "code" :  "NotFoundPet",
    "statusNum" : 404
  }
}
```

## 응원메시지 전체조회

---

> GET http://localhost:8080/api/cheering/messages/{petId}?page=&size=
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 응원메시지 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 404 | 해당 반려동물이 없을시 |
|  |  |

### Request/Response

---

**Response**

- 응원메시지 조회 성공

```json
**Body**
{
    "data": [
        {
            "cheeringMessageId": 1,
            "cheering": ""
        },
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 3,
        "paged": true,
        "unpaged": false
    },
    "totalElements": 100,
    "totalPages": 34,
    "last": false,
    "size": 3,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 해당 반려동물 없을시

```json
**Body**
{
  "data": {
    "msg" : "해당 반려동물이 없습니다.",
    "code" :  "NotFoundPet",
    "statusNum" : 404
  }
}
```

## 응원메시지 상세조회

---

> GET http://localhost:8080/api/cheering/messages/{petId}/{messageId}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 응원메시지 상세 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 404 | 응원메시지가 존재하지 않을시 |
| 404 | 해당 반려동물이 없을시 |

### Request/Response

---

**Response**

- 응원메시지 상세조회 성공

```json
**Body**
{
  "data": {
            "cheering": ""
        }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 해당 반려동물 없을시

```json
**Body**
{
  "data": {
    "msg" : "해당 반려동물이 없습니다.",
    "code" :  "NotFoundPet",
    "statusNum" : 404
  }
}
```

- 해당 응원메시지가 없을시

```json
**Body**
{
  "data": {
    "msg" : "해당 응원메시지가 없습니다.",
    "code" :  "NotFoundCheeringMessage",
    "statusNum" : 404
  }
}
```

## 응원메시지 삭제 (팻 주인만)

---

> DELETE http://localhost:8080/api/cheering/messages/{petId}/{messageId}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 응원메시지 삭제 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 401 | 반려동물 주인이 아닐경우 |
| 404 | 반려동물이 없을 경우 |
| 404 | 응원메시지가 없을시 |

### Request/Response

---

**Response**

- 응원메시지 삭제 성공

```json
**Body**
{
  "data": {
    "msg" : "응원메시지 삭제를 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 반려동물 주인이 아닐시

```json
**Body**
{
  "data": {
    "msg" : "제 반려동물이 아니에요",
    "code" :  "NotMyPet",
    "statusNum" : 400
  }
}
```

- 해당 반려동물 없을시

```json
**Body**
{
  "data": {
    "msg" : "해당 반려동물이 없습니다.",
    "code" :  "NotFoundPet",
    "statusNum" : 404
  }
}
```

- 해당 응원메시지가 없을시

```json
**Body**
{
  "data": {
    "msg" : "해당 응원메시지가 없습니다.",
    "code" :  "NotFoundCheeringMessage",
    "statusNum" : 404
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API명세-59ae-7ec2 / 일기.md

# 일기

---

## 일기 생성

---

> POST http://localhost:8080/api/diary/{petId}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| diaryTitle | STRING | NOTNULL |
| diaryContent | STRING | NOTNULL |
| imageUrl | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 내펫이 아닐시 |
| 400 | 메모리북이 활성화가 아닐시 |
| 401 | 토큰이 유효하지 않을시 |

### Request/Response

---

**Response**

- 일기 쓰기 성공

```json
**Body**
{
  "data": {
    "msg" : "일기 쓰기가 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "제 반려동물이 아니에요",
    "code" :  "NotMyPet",
    "statusNum" : 400
  }
}
```

- 내펫이 아닐시

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 메모리북 활성화 북이 되지 않았을시

```json
**Body**
{
  "data": {
    "msg" : "메모리 북이 활성화 되지 않았어요.",
    "code" :  "memoryBookIsNotActive",
    "statusNum" : 400
  }
}
```

## 일기 전체 조회

---

> GET http://localhost:8080/api/diarys/{petId}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 내가 아닐때 : 메모리 북이 공개가 아닐시 |
| 400 | 메모리북이 활성화가 안될시 |

### Request/Response

---

**Response**

- 일기 전체 조회 성공

```json
**Body**
{
  "data": [
  {
    "memorialDiaryId" : ,
	  "diaryTitle": "",
	  "diaryContent": "",
	  "imgUrl" : "",
	  "createTime" :
  },
  
  
  ]
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 메모리북 활성화 북이 되지 않았을시

```json
**Body**
{
  "data": {
    "msg" : "메모리 북이 활성화 되지 않았어요.",
    "code" :  "memoryBookIsNotActive",
    "statusNum" : 400
  }
}
```

- 내가 아닐때 : 메모리 북이 공개가 아닐시

```json
**Body**
{
  "data": {
    "msg" : "메모리 북이 공개되지 않았어요.",
    "code" :  "memoryBookIsNotRelease",
    "statusNum" : 400
  }
}
```

## 일기 전체 상세조회

---

> GET http://localhost:8080/api/diary/{diaryId}/{petId}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 내가 아닐때 : 메모리 북이 공개가 아닐시 |
| 400 | 메모리 북이 활성화가 아닐시 |

### Request/Response

---

**Response**

- 일기 전체 상세조회

```json
**Body**
{
  "data":
  {
	  "diaryTitle": "",
	  "diaryContent": "",
	  "imgUrl" : "",
	  "createTime" :
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 메모리북 활성화 북이 되지 않았을시

```json
**Body**
{
  "data": {
    "msg" : "메모리 북이 활성화 되지 않았어요.",
    "code" :  "memoryBookIsNotActiveException",
    "statusNum" : 400
  }
}
```

- 내가 아닐때 : 메모리 북이 공개가 아닐시

```json
**Body**
{
  "data": {
    "msg" : "메모리 북이 공개되지 않았어요.",
    "code" :  "memoryBookIsNotReleaseException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API명세-59ae-7ec2 / 질문-답변.md

# 질문 답변

---

## 질문 답변 생성

---

> GET http://localhost:8080/api/quest/{questId}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
| file | MULTIPARTFILE | NULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 답변 생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 401 | 토큰이 유효하지 않은 경우 |

### Request/Response Example

---

**Response**

- 질문 답변 생성 성공

```json
**Body**
{
  "data": {
    "msg" : "질문 답변 생성을 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을 시

```jsx
 **Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 401
  }
}
```

## 질문 답변 상세 조회

---

> GET http://localhost:8080/api/quest/{questId}
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 답변 상세 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response Example

---

**Response**

- 질문 답변 상세 조회 성공

```json
**Body**
{
	"data" : {
		"content" : "string",
		"imageUrl" : "string",
		"videoUrl" : "string",
		"isReply" : "boolean",
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

## 질문 답변 목록 조회

---

> GET http://localhost:8080/api/quest
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 목록 조회 성공 |
| 500 | 서버 내 오류로 목록 조회를 못 하는 경우 |

### Request/Response Example

---

**Response**

- 질문 목록 조회 성공

```json
**Body**
{
    "data": [
        {
          "content" : "string"
        },
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 3,
        "paged": true,
        "unpaged": false
    },
    "totalElements": 100,
    "totalPages": 34,
    "last": false,
    "size": 3,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
}
```

- 서버 내 오류로 목록 조회를 못 하는 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "서버 내 오류가 발생하였습니다.",
    "code" :  "생각해보기",
    "statusNum" : 500
  }
}
```


## 공통-프로젝트 / API명세-59ae-7ec2 / 질문.md

# 질문

---

## 질문 상세 조회

---

> GET http://localhost:8080/api/quests/{questId}
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 상세 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response Example

---

**Response**

- 질문 상세 조회 성공

```json
**Body**
{
	"data" : {
		"content" : "string",
		"type" : "string",
	}
}
```

- 토큰이 유효하지 않을 시

```jsx
 **Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

## 질문 목록 조회

---

> GET http://localhost:8080/api/quests
> 

### Response Body

| Code | Details |
| --- | --- |
| 200 | 질문 목록 조회 성공 |
| 500 | 서버 내 오류로 목록 조회를 못 하는 경우 |

### Request/Response Example

---

**Response**

- 질문 목록 조회 성공

```json
**Body**
{
    "data": [
        {
          "content" : "string",
          "type" : "string",
        },
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 3,
        "paged": true,
        "unpaged": false
    },
    "totalElements": 100,
    "totalPages": 34,
    "last": false,
    "size": 3,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
}
```

- 서버 내 오류로 목록 조회를 못 하는 경우

```jsx
 **Body**
{
  "data": {
    "msg" : "서버 내 오류가 발생하였습니다.",
    "code" :  "생각해보기",
    "statusNum" : 500
  }
}
```


## 공통-프로젝트 / API명세-59ae-7ec2 / 채팅(시간-있음).md

# 채팅(시간 있음)

---

채팅 어디 들어가는것??? 웹알티씨 미션에?


## 공통-프로젝트 / API명세-59ae-7ec2 / 편지-답장.md

# 편지 답장

---

## 편지 답장 보기 → 편지 상세조회와 똑같음!

---

> GET http://localhost:8080/api/pets/{pet-id}/letters/{letter-id}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 답장 조회성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 답장 조회성공

```json
**Body**
{
  "data": {
    "msg" : "편지 답장 조회 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 편지답장 생성(유저의 답장)

---

> POST http://localhost:8080/api/pets/{pet-id}/letters/{letter-id}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
| imageUrl | STRING | NULL |
| isUserSend | BOOLEAN | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 답장 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 답장 성공

```json
**Body**
{
  "data": {
    "msg" : "편지 답장 성공 하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
Body
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API명세-59ae-7ec2 / 편지.md

# 편지

---

- INDEX

## 편지생성(유저의 발신)

---

> POST http://localhost:8080/api/pets/{pet-id}/letters
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| content | STRING | NOTNULL |
| imageUrl | STRING | NULL |
| isUserSend | BOOLEAN | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 생성 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 생성 성공

```json
**Body**
{
  "data": {
    "msg" : "편지가 성공적으로 전송 되었습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

---

## (편지함) 편지 리스트 조회

---

> GET http://localhost:8080/api/pets/{pet-id}/letters
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지함 조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지함 조회 성공

```json
**Body**
{
  "data": {
    "msg" : "편지함 조회 성공 하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 편지 상세조회

---

> GET http://localhost:8080/api/pets/{pet-id}/letters/{letter-id}
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 상세조회 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 상세조회 성공

```json
**Body**
{
  "data": {
    "msg" : "편지 상세조회 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 편지 (키워드)검색

---

> GET http://localhost:8080/api/pets/{petId}/letters?keyword=
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Response Body

| Code | Details |
| --- | --- |
| 200 | 편지 검색 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 편지 검색 성공

```json
**Body**
{
  "data": {
    "msg" : "편지 검색 성공 하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```


## 공통-프로젝트 / API명세-59ae-7ec2 / 회원-API.md

# 회원 API

---

- INDEX
    
    

/api/auth: 전화번호 인증, 인증번호 확인, oauth 로그인/회원가입

## 회원가입

---

> POST http://localhost:8080/api/auth/signup
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| email | STRING | NOTNULL |
| userName | STRING | NOTNULL |
| phoneNumber | STRING | NOTNULL |
| birthDate | DATE | NOTNULL |
| gender | STRING | NOTNULL |
| questReceptionTime | DATE | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 회원가입 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |

### Request/Response

---

**Response**

- 회원가입 성공

```json
**Body**
{
  "data": {
    "msg" : "회원가입이 성공하였습니다."
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

## 전화번호 인증번호 받기

---

> GET http://localhost:8080/api/auth/code
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| phoneNumber | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 인증코드 받기 성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 전화번호 이미 존재할 경우 |

### Request/Response Example

---

**Response**

- 인증코드 받기 성공

```json
**Body**
{
	"data" : {
		"msg" : "인증코드 받기를 성공했습니다."
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 전화번호 이미 존재할 경우

```jsx
**Body**
{
  "data": {
    "msg" : "이미 존재하는 전화번호입니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

## 인증 번호 확인

---

> POST http://localhost:8080/api/auth/code
> 

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| phoneNumber | STRING | NOTNULL |
| authCode | STRING | NOTNULL |

### Response Body

| Code | Details |
| --- | --- |
| 200 | 인증번호 확인성공 |
| 400 | 요청 데이터 형식이 잘못된경우 |
| 400 | 인증 번호 틀릴시 |
| 400 | 전화번호가 틀릴시 |

### Request/Response Example

---

**Response**

- 인증번호 확인성공

```json
**Body**
{
	"data" : {
		"msg" : "인증코드 받기를 성공했습니다."
	}
}
```

- 요청 데이터 형식이 잘못된경우

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 형식의 데이터입니다.",
    "code" :  "wrongTypeException",
    "statusNum" : 400
  }
}
```

- 인증 번호 틀릴시

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 인증번호입니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

- 전화번호가 틀릴시

```jsx
 **Body**
{
  "data": {
    "msg" : "잘못된 전화번호입니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

## 회원조회(상세조회)

---

> GET http://localhost:8080/api/user
> 

### Request Header

```json
{
		"Authorization" : "bearer ${token}"
}
```

### Response Body

| Code | Details | Header |
| --- | --- | --- |
| 200 | 회원 조회 성공 | “Authorization” : “Berear {token}” |
| 401 | 토큰이 유효하지 않을시 |  |

### Request/Response Example

---

**Response**

- 회원 조회 성공

```json
**Header**
{
	"Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdHJpbmciLCJpc3MiOiJzaG9wcGluZyIsImlhdCI6MTY2NDEwNTcyNCwiZXhwIjoxNjY0MTkyMTI0fQ.w_bpHuV33Ruv-oU9WmLpmjnC0oBJjBFzKTvPc0upNTFDW7TY_6RATGNbtw8pBCEfqe8-HI9wFa_XqEQf-YRz2Q"
	"Set-Cookie" : "refreshToken= "
}

**Body**
{
	"data" : {
		"email" : "string",
		"userName" : "string",
		"phoneNumber" : "string",
		"birthDate" : "string",
		"gender": "string",
		"questReceptionTime": "string"
	}
}
```

- 토큰이 유효하지 않을 시

```jsx
 **Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

## 회원수정

---

> PUT http://localhost:8080/api/user
> 

### Request Header

```json
{
		"Authorization" : "berear ${token}"
}
```

### Request Body

| 필드명 | 타입 | 필수여부 |
| --- | --- | --- |
| phoneNumber | STRING | NOTNULL |

### Response Body

| Code | Details | Header |
| --- | --- | --- |
| 200 | 회원수정 성공 | “Authorization” : “Berear {token}” |
| 400 | 회원수정 실패 |  |
| 400 | 요청 데이터 형식이 잘못된경우 |  |
| 401 | 토큰이 유효하지 않을시 |  |

### Request/Response Example

---

**Response**

- 회원 수정 성공

```json
**Body**
{
	"data" : {
		"msg" : "회원 수정을 성공했습니다."
	}
}
```

- 회원수정 실패

```json
**Body**
{
  "data": {
    "msg" : "회원 수정에 실패했습니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

- 요청 데이터 형식이 잘못된경우

```json
**Body**
{
  "data": {
    "msg" : "요청 데이터 형식이 잘못되었습니다.",
    "code" :  "생각해보기",
    "statusNum" : 400
  }
}
```

- 토큰이 유효하지 않을시

```json
**Body**
{
  "data": {
    "msg" : "토큰이 유효하지 않습니다.",
    "code" :  "생각해보기",
    "statusNum" : 401
  }
}
```


## 공통-프로젝트 / API명세.md

# API명세

[제목 없음](API%EB%AA%85%EC%84%B8/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C%207232db64c9d14423b6fbf16350c138da.csv)

### API 규칙

https://medium.com/tech-pentasecurity/restful-api-네이밍-7c81bdb9da63

https://blog.pumpkin-raccoon.com/115

문제

- URI에 동사형 단어가 포함되어 있다.
- 복수, 단수형이 혼재됨
- 자원 정보 말고도 다른 단어가 포함되어 있다.

고려할 것

- 어떤ADI요청방식을가지고있는지
- 요청이실행되는곳은어디인지
- API요청을하기위해별도의인증방식이있는지
- 어떤채팅방에메시지를전송할것인지
- 전송할채팅메시지내용은무엇인지
- 메시지를작성할때글자수는몇자로제한되는지
- 메시지전송시형태는어떻게되는지
- API요청을별도로테스트할수있는지

# API 상세

## 유저정보

---

[회원 API](API%EB%AA%85%EC%84%B8/%ED%9A%8C%EC%9B%90%20API%20e8181d26304d4a91bab2012bdb3751d4.md)

[반려동물 API](API%EB%AA%85%EC%84%B8/%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC%20API%20081cea27d6d446f689b73843abd039ee.md)

---

## 지구별 콘텐츠

---

[질문](API%EB%AA%85%EC%84%B8/%EC%A7%88%EB%AC%B8%2026a9fbc1e7904cf3b0e60806c2f0374e.md)

[질문 답변](API%EB%AA%85%EC%84%B8/%EC%A7%88%EB%AC%B8%20%EB%8B%B5%EB%B3%80%20caa03451fc59440698239c8710728533.md)

---

[편지](API%EB%AA%85%EC%84%B8/%ED%8E%B8%EC%A7%80%201a9439af623340e88b7622a41cd0534d.md)

[편지 답장](API%EB%AA%85%EC%84%B8/%ED%8E%B8%EC%A7%80%20%EB%8B%B5%EC%9E%A5%2017d9cc2110f240d79380f74a51b4a889.md)

---

## 영원별 콘텐츠

---

**메모리얼북 콘텐츠**

[메모리얼 북](API%EB%AA%85%EC%84%B8/%EB%A9%94%EB%AA%A8%EB%A6%AC%EC%96%BC%20%EB%B6%81%200e75e5ffdcd141cc8fcf0eb4033ab25e.md)

[분석결과](API%EB%AA%85%EC%84%B8/%EB%B6%84%EC%84%9D%EA%B2%B0%EA%B3%BC%209ba044050c354e97bf362160f08d4abe.md)

[일기](API%EB%AA%85%EC%84%B8/%EC%9D%BC%EA%B8%B0%2017ee710c50dd4cd99020565bf64c4eeb.md)

[응원 메시지](API%EB%AA%85%EC%84%B8/%EC%9D%91%EC%9B%90%20%EB%A9%94%EC%8B%9C%EC%A7%80%20980038cf89b649b3a5b42632c5e52314.md)

---

## 기타

[알림](API%EB%AA%85%EC%84%B8/%EC%95%8C%EB%A6%BC%20f8e71f8eb0af4a6bb1b11bd8ed75f88d.md)

[채팅(시간 있음)](API%EB%AA%85%EC%84%B8/%EC%B1%84%ED%8C%85(%EC%8B%9C%EA%B0%84%20%EC%9E%88%EC%9D%8C)%20fc0b4ed80d394b2fa67adf8b83be5163.md)

# [프론트엔드 API](%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C/%ED%94%84%EB%A1%A0%ED%8A%B8%20%EB%9D%BC%EC%9A%B0%ED%8C%85%20API%20dc3094da196b44d390b211be23caab44.md)

---


## 공통-프로젝트 / 버그수정-머지-후-완료-해주세용 / FE-버그-및-수정사항 / 응원메시지-삭제-API-누락.md

# 응원메시지 삭제 API 누락

담당자: 민호 박
상태: 완료
우선순위: 매우높음
제보자: 도이 김


## 공통-프로젝트 / 버그수정-머지-후-완료-해주세용 / FE-버그-및-수정사항 / 응원메시지-상세조회-API-연결-누락된것-같습니다-사진첨부.md

# 응원메시지 상세조회 API 연결 누락된것 같습니다. 사진첨부

담당자: 민호 박
상태: 완료
우선순위: 매우높음
제보자: 도이 김

![image.png](images/image_0048.png)


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / earth-letter-letterid.md

# /earth/letter/{letterid}

method: routing
action: 편지 한 개 자세히 보기


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / earth-letter-post-letterid.md

# /earth/letter/post/{letterid}

method: routing
action: 편지답장하기


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / earth-letter.md

# /earth/letter

method: routing
action: 편지쓰기


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / earth-letterbox.md

# /earth/letterbox

method: routing
action: 편지함


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / earth-quest-questId-useridc.md

# /earth/quest/:questId?useridc

method: routing
action: 화상채팅


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / earth-quest-questId.md

# /earth/quest/:questId

method: routing
action: 질문받기

- map 으로 미리 type 저장


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / earth.md

# /earth

method: routing
action: 메인페이지(지구별)


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / everstar-petid-explore.md

# /everstar/:petid/explore

method: routing
action: 타 영원별 이동


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / everstar-petid-memorial-diary.md

# /everstar/:petid/memorial/diary

method: routing
action: 일기 작성


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / everstar-petid-memorial.md

# /everstar/:petid/memorial

method: routing
action: 메모리얼북 열기


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / everstar-petid-message.md

# /everstar/:petid/message

method: routing
action: 응원메시지


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / everstar-petid.md

# /everstar/:petid

method: routing
action: 메인페이지(영원별)


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / login.md

# /login

method: routing
action: 로그인 페이지로 이동


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / mypage-auth.md

# /mypage/auth

method: routing
action: 휴대폰 인증


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / mypage-profile.md

# /mypage/profile

method: routing
action: 반려동물 선택


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / mypage.md

# /mypage

method: routing
action: 마이페이지로 이동


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / oauth-token.md

# /oauth/:token

method: routing
action: OAuth 토큰 받기

[https://i11b101.p.ssafy.io/api/auth/oauth2/authorization/kakao](https://i11b101.p.ssafy.io/api/auth/oauth2/authorization/kakao)

- google은 맨 뒤에만 변경


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / profile-add.md

# /profile/add

method: routing
action: 반려동물 등록


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / signup-auth.md

# /signup/auth

method: routing
action: 휴대폰 인증


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / signup-userEmail.md

# /signup/:userEmail

method: routing
action: 회원가입 페이지로 이동


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API / PageAPI / 제목-없음.md

# 제목 없음


## 공통-프로젝트 / 프론트엔드 / 프론트-라우팅-API.md

# 프론트 라우팅 API

[PageAPI](%ED%94%84%EB%A1%A0%ED%8A%B8%20%EB%9D%BC%EC%9A%B0%ED%8C%85%20API/PageAPI%200005ae9687134306a713535779112042.csv)


## 공통-프로젝트 / 학습자료 / 07-17-erd-restapi-컨벤션-조언.md

# 07.17 erd, restapi 컨벤션 조언

- ERD

pk column은 “id”로 일관되게 수정

table명을 column명에 똑같이 쓰는 것 자제

- REST API

rest api 자원 복수로

계층형에 맞게 restapi 주소 설정 (변수값을 연속적으로 x)

bearer 토큰 철자 주의

가능하면 동사 사용 자제(4대 method로 표현이 정 불가능하다면 사용)

[REST API 컨벤션 Top5! 단수, 복수, 네이밍 등의 url 설계를 위한 best practice 알아보기](https://blog.pumpkin-raccoon.com/115)

[RESTful API 네이밍](https://medium.com/tech-pentasecurity/restful-api-네이밍-7c81bdb9da63)
