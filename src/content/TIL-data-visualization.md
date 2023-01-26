---
title: '데이터 시각화'
author: [woodaehyun]
tags: [TIL, ETC]
image: null
date: '2023-01-25T23:23:00.000Z'
draft: false
excerpt: '데이터 시각화란 말 그대로 데이터를 눈으로 확인할 수 있게 시각화 한다는 것이다. 일반적으로 자바스크립트를 기반으로 한 데이터 시각화 라이브러리가 많이 있다.'
---

> **데이터 시각화란?**

말 그대로 데이터를 시각화 한다는 것이다. 예를 들면 코로나 지역별 확진자 수를 보여주는 지도나 대시보드 전략지표 시스템 모니터링 등 일반적인 실무에서 사용되는 데이터 시각화를 들 수 있다. 스크롤링 시각화와 스토리텔링도 많이 사용되는 예시 중 하나이다. 그럼 왜 데이터를 시각화 해야할까? 왜냐하면 시각화가 데이터에 형태를 부여하여 데이터를 한 눈에 파악할 수 있게 해주기 때문이다. 데이터의 패턴을 비교하여 포인트 등을 파악할 수 있고, 시각화를 통해 인사트를 얻을 수 있게 하기 때문이다.

그럼 어떻게 만들어야 할까? 일반적으로 자바스크립트를 기반으로 한 데이터 시각화 라이브러리가 많이 있다. 그리고 그 중 우리가 앞으로 내가 공부할 내용은 D3.js 데이터 시각화 라이브러리이고 현재 가장 인기가 있다.

---

> **데이터 시각화 만드는 방법을 알아보자!**

그렇다면 데이터 시각화를 어떻게 만들어야할까? 우선은 무엇이 좋은 데이터 시각화인지 고민하고 시작하는것이 중요하다 우리가 개발을 하면서 코드를 작성하는 것과 마찬가지로 말이다. 큰 순서를 정해보자면 다음과 같다.

-데이터 시각화 기획(데이터, 독자, 구성 세 가지 큰 틀을 정하는게 중요)<br/>-데이터 확보: 풍부하고 유용한 데이터(사람들이 관심을 가질 만큼)<br/> -독자: 독자의 니즈 파악하기<br/>-내용의 구성: (데이터에서 출발하는 방법, 분석에서 출발하는 방법)<br/>-데이터에서 출발이란? 데이터에서 바로 측정가능 한 수치들을 찾고 시각화<br/>분석에서 출발이란? 데어터의 양상을 가지고 소결을 만들고 증명하고 결론을 내는 방법(주로 스토리텔링 방식으로 많이 진행함)

그럼 무엇이 좋은 데이터 시각화일까? 좋은 데이터 시각화란, 풍부하고 유용한 데이터, 명료하고 보기 좋은 시각화, 한 눈에 내용이 잘 전달되는 구성을 갖은 데이터 시각화가 좋은 데이터 시각화라고 볼 수 있을 것 같다.

그렇다면 명확하고 보기 좋은 시각화를 만들려면 어떻게 해야할까? 주제에 따른 정말 필요한 정보만 보여주고 인지를 해치지 않는 적절한 시각적 속성으로 구성하고 군더더기 없는 부가 설명을 포함하는 것이 좋은 시각화라고 할 수 있을 것 같다.

---

> **다양한 데이터 시각화 종류들에 대해 알아보자!**

데이터는 여러 형태로 존재하는데 데이터 유형에 따라 어떤 그래프나 차트를 이용하면 좋을까?

-수량을 보여주려면 뭐가 좋을까? **주로 표, 막대 차트로 일반적으로 시각화** 한다.
<br/> -여러 범주의 수량을 보여주려면 뭐가 좋을까? **묶음 막대, 멀티 차트로 일반적으로 시각화** 한다.
<br/> -비율을 보여주려면 뭐가 좋을까? **파이 차트, 누적 막대 도표, 모자이크 도표, 트리맵으로 일반적으로 시각화** 한다.
<br/> -시계열과 추세를 보여주려면 뭐가 좋을까? **선 그래프로 일반적으로 시각화** 한다.
<br/> -지리 공간을 시각화 하는 방법은? **단계 구분도로 일반적으로 시각화** 한다.

---

> **효과적인 시각화를 위해 꼭 알아야할 점 6가지를 알아보자!**

-선형 스케일 차트는 항상 0에서 출발해야 한다. 좌표계!<br/>-무분별한 색 사용은 오히려 시각적인 혼란을 불러 일으킵니다. (3~5 가지 색이 적당함)<br/>-색각 이상자를 배려합니다.<br/>-제목을 적당히 활용합니다. 그럼 오히려 사람들이 차트를 이해하기 쉽게 만들 수 있음!!<br/>-테두리와 격자를 적당히 활용합니다.<br/>-3D 시각화는 하지 말자

---

> **앞으로 공부하게 될 D3에 대해서 알아보자!**

-자바스크립트 라이브러리임<br/>-Mike bostock이 주도해서 만듬<br/>-데이터 시각화에 적합한 오픈소스임<br/>-Data Deriven Documents<br/>-데이터 기반으로 DOM을 다루는 라이브러리<br/>-다양한 데이터 포맷 처리 & import 제공<br/>-HTML SVG 웹 표준 기술을 다양하게 사용<br/>-데이터와 DOM element를 결합

---

> **SVG란?**

크기를 축소/확대하면 해상도를 조절해 주며 HTML과 비슷한 마크업 언어로 작성한다. 작성 방법을 알아보자!

```javascript
<svg width="500px" height="500px">
  <circle cx="100" cy="50" r="20" />
</svg>
```

이런 식으로 작성됨(동그라미)

```javascript
<svg width="500px" height="500px">
  <rect x="0" y="0" width="100" height="50" rx="10" ry="10" />
</svg>
```

이런 식으로 작성됨(직사각형)

D3는 이러한 SVG를 활용한다! 이를 통해 데이터와 DOM element를 D3가 결합해준다.

**\[**
**{**
**“name”: “극한직업”, —> element - 16264984**
**“value”: 16264984**
**},**
**{**
**“name”: “어벤져스”, —>element - 13977602**
**“value”: 13977602**
**}**
**\]**

이렇게 되면 rect element의 속성을 데이터에 맞추게 된다. 즉 D3는 데이터 값의 크기에 맞게 rect너비 크기를 설정할 수 있다.

이 처럼 D3는 각각의 데이터 포인트를 SVG elemnet와 결합하고 시각적인 형태와 위치를 조절하고 SVG로 만들어서 확대/축소를 해도 해상도 픽셀이 흐려지거나 깨지지 않는 장점이 있다. 단점은 분석 툴이 아니기 때문에 Tableau나 Excel처럼 버튼 몇 번으로 쉽고 빠르게 시각화를 만들어낼 순 없다. D3는 자바스크립트 기반 데이터 시각화 라이브러리이기 때문에 직접 하나 하나 구현해야한다.

---

> **SVG 기본 태그들을 확인해 보자**

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Data visualization</title>
  </head>
  <body>
    <p>SVG로 도형 그리자</p>

    <svg width="500px" height="500px">
      <!-- 원 -->
      <circle cx="100" cy="50" r="20" />

      <!-- 타원 -->
      <ellipse cx="50" cy="25" rx="40" ry="20" />

      <!-- 직사각형 -->
      <rect x="0" y="70" width="100" height="20" />

      <!-- 모서리가 둥근 직사각형 -->
      <rect x="0" y="100" width="100" height="20" rx="10" ry="10" />

      <!-- 다각형 -->
      <polygon points="300,300 150,450 300,450" />

      <!-- 선 -->
      <line x1="0" y1="300" x2="200" y2="400" stroke="black" />

      <!-- Path -->
      <path d="M 0 200 q 100 -100 100 200 l 100 200" />

      <!-- 문자 -->
      <text x="10" y="150" font-size="20">SVG 문자</text>
    </svg>
  </body>
</html>
```

---

> **SVG태그 그룹화 및 transform**

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .blue-group {
        fill: blue;
        stroke-width: 3;
      }
      .red-group {
        fill: red;
        stroke-width: 4;
        font-weight: bold;
      }
      .green-group {
        fill: green;
        stroke-width: 2;
        fill-opacity: 0.5;
      }
    </style>
    <title>Data visualization</title>
  </head>
  <body>
    <p>코드 작성</p>
    <svg width="600px" height="500px">
      <!-- g 태그 활용하기 -->
      <!-- <g> 태그를 통해 요소를 구룹화 할 수 있습니다. -->
      <g class="blue-group" transform="scale(1.2)">
        <text x="0" y="20">Blue group</text>
        <rect x="0" y="40" width="50" height="50" rx="10" ry="10" />
        <polygon points="80,30 70,70 130,50" />
        <line x1="60" y1="75" x2="120" y2="90" stroke="blue" />
      </g>
      <g class="red-group" transform="translate(200)">
        <text x="0" y="20">Red group</text>
        <rect x="0" y="40" width="50" height="50" rx="10" ry="10" />
        <polygon points="80,30 70,70 130,50" />
        <line x1="60" y1="75" x2="120" y2="90" stroke="red" />
      </g>
      <g class="green-group" transform="translate(200, 120)">
        <text x="0" y="20">Green group</text>
        <rect x="0" y="40" width="50" height="50" rx="10" ry="10" />
        <polygon points="80,30 70,70 130,50" />
        <line x1="60" y1="75" x2="120" y2="90" stroke="green" />
      </g>
      <!-- transform 속성으로 SVG 요소를 변형시키고, 움직이거나 회전시킬 수도 있습니다. -->
      <!-- transform="translate(200)" -->

      <!-- transform="scale(1.2)" 그룹의 크기를 키움-->
      <!-- transform="translate(200,120)" 그룹의 위치를 이동-->
    </svg>
  </body>
</html>
```

![SVG](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdarLO7%2FbtrXfNX2ZvL%2F4QOUpbF12QU76cHnJTYZ41%2Fimg.png, 'SVG')

---

> **데이터 시각화**

오늘은 D3를 배우기 전에 전체적인 데이터 시각화가 무엇이고, 또 어떤 것이 좋은 데이터 시각화인지 알아보는 시간과 SVG의 태그들을 알아보는 공부를 했다. 공부를 하면서 솔직하게 느낀 심정은 아무래도 귀에 걸면 귀걸이 코에 걸면 코걸이? 느낌이 약간 들었던 것 같다. 똑같은 도표도 누군가에게는 좋을수도 있고 누군가에게는 아닐 수도 있기 때문이다. 다만 한 가지 장점이 있다면 기존의 Excel을 활용해서 도표를 만들거나 하는 것보다 SVG나 D3를 통해서 데이터를 시각화 한다면 조금 더 구체적이고 원하는 의도대로 데이터를 시각화 할 수 있겠다는 장점이 있었고, 아직 D3 라이브러리를 제대로 배우기 전의 생각이긴 하지만 SVG의 경우 하나 하나 위치 너비 크기를 조절하여 시각화를 해야 하는데 그렇게 효율적이라는 생각이 들지는 않았다. (아 물론 g태그로 그룹화하여 처리하는 것도 있겠지만,, 그래도 글쎄?.. 아직은 잘 모르겠다. 앞으로 배워보면서 알아가야겠다🧐)
