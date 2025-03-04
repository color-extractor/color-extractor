# color-X (color extractor)

![Image](https://github.com/user-attachments/assets/6942280f-1a95-48a9-90e9-7b3cd7232a17)

웹사이트에서 주요 색상을 추출하고, 특정 요소에 대한 가중치를 반영하여 대표적인 색상을 도출하는 서비스

## 목차

- 주요 기능
- 기술 스택
- 구현 세부 사항
- 트러블 슈팅
- 배포 및 운영 계획
- 프로젝트 일정

## 주요 기능

1. **웹페이지 색상 데이터 추출**
   - `window.getComputedStyle`을 활용하여 HTML 요소의 색상 정보 수집
2. **가중치 부여 및 데이터 증강**
   - 특정 요소(예: `<h1>`, `<main>`, `<article>` 등)에 가중치를 부여하여 색상 데이터를 조정
   - Favicon 색상 정보를 반영하여 데이터 증강
3. **색상 클러스터링**
   - K-Means 알고리즘을 적용하여 주요 색상 그룹화
4. **UI 개발**
   - 사용자가 웹사이트 URL을 입력하면, 대표 색상을 시각적으로 보여주는 인터페이스 제공

---

# 기술 스택

| 분야           | 기술 스택        |
| -------------- | ---------------- |
| **프론트엔드** | **React**        |
|                | **Tailwind CSS** |
| **백엔드**     | **Node.js**      |
|                | **Express.js**   |
|                | **Puppeteer**    |

---

# 구현 세부 사항

## 색상 데이터 추출

1. `window.getComputedStyle`을 사용하여 페이지 내 요소들의 색상 값을 수집
2. Favicon 이미지에서 주요 색상 추출 후, 기존 색상 데이터와 결합

## 가중치 부여 방식

> 특정 요소의 색상 데이터를 증가시키는 방식 (데이터 증강 개념 적용)

### 가중치 적용 대상

- **HTML 주요 요소** (문서 중요도 기준)
  - `<h1>`: 문서 내 제목 요소
  - `<header>`, `<footer>`: 사이트의 헤더 및 푸터
  - `<main>`, `<article>`, `<section>`: 주요 컨텐츠 영역
  - `<nav>`: 네비게이션 영역
  - `<address>`: 연락처 정보 제공 영역

### 적용 코드 예시

```javascript
const getWeightedValueHtmlElement = (value) => {
  const filter = ["H1", "HEADER", "FOOTER", "MAIN", "NAV", "ADDRESS"];
  if (filter.includes(value.tagName.toUpperCase())) {
    return true;
  }
};

if (getWeightedValueHtmlElement(element)) {
  for (let i = 0; i < weightIterationCount; i++) {
    arr.push(propertyName + ": " + propertyValue);
  }
}
```

# 💥트러블 슈팅

---

# 배포 및 운영 계획

## AWS 인프라 구성

- **EC2 (Free Tier)**: Puppeteer 크롤링 서버 운영
- **Docker**: 서버 및 크롤링 환경 컨테이너화하여 배포

## 배포 방식

- **CI/CD 자동화** 구축 예정

---

# 프로젝트 일정

## 1차 개발

> 2025년 2월 9일 ~ 2025년 2월 24일

- 프로젝트 보일러 플레이트 코드 설정
- 서버 Express, Puppeteer 설정
- 크롤링[Puppeteer] 서버 개발
- API 개발
- 색상 분류 알고리즘 분석
- UI 구현 작업
