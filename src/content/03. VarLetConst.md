---
title: 'Var Let Const 차이점'
author: [woodaehyun]
tags: [lang, javascript]
image: null
date: '2023-01-03T19:00:00.000Z'
draft: false
excerpt: 자바스크립트는 ES6에서 도입된 let, const를 포함한 모든 선언문(var, let, const등)을 호이스팅 합니다. 단, let, const, class는 호이스팅이 발생하지 않는 것처럼 동작합니다.
---

> **변수 선언의 실행 시점과 변수 호이스팅**

![변수 선언](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FG2Mqa%2FbtrSE7S10ES%2FNlbRS5LZAex1Nar90CkNO0%2Fimg.png 'var let const')

자바스크립트 엔진은 변수 선언을 다음과 같은 2단계에 거쳐 수행합니다.

1.  **선언 단계** : 변수 이름을 등록(실행 컨텍스트의 렉시컬 환경)해서 자바스크립트 엔진에 변수의 존재를 알립니다.
2.  **초기화 단계** : 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화 합니다. (const 제외)

```javascript
console.log(score); // undefined

var score = 'Hello World';

console.log(score); // 'Hello World'

var hoisting =
  '선언문이 스코프의 선두로 끌어 올려진 것처럼 동작하는 것을 자바스크립트만의 고유한 특징인 호이스팅 이라고 합니다';
```

> **var 키워드로 선언한 변수의 특징**

1\. 변수 중복 선언 허용

동일한 스코프 내에서 var 키워드로 선언한 변수는 중복 선언이 가능합니다. 하지만 동작의 미세한 차이가 존재합니다. 초기화문 유무에 따라 다르게 동작합니다. **초기화문이 있는 변수 선언문**은 마치 var 키워드가 없는 것처럼 동작하여 재할당이 이뤄지고, **초기화문이 없는 변수 선언문**은 그냥 무시됩니다.

```javascript
var x = 1;
var y = 1;

var x = 100; // var 키워드가 없는 것처럼 동작(재할당 처럼 동작)
var y; // 무시

console.log(x); // 100
console.log(y); // 1
```

2\. 함수 레벨 스코프

var 키워드로 선언한 변수는 오로지 **함수의 코드 블록만**을 지역 스코프로 인정합니다. 따라서 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 됩니다.

```javascript
var x = 1; // x는 전역변수

if (true) {
  var x = 10; // x는 전역변수 중복선언으로 var 키워드가 없는 것처럼 동작
}
```

3\. 변수 호이스팅

var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작합니다. (undefined로 초기화)

4\. window 전역 객체의 프로퍼티가 됩니다. (참고로 암묵적 전역도 window 객체의 프로퍼티가 됩니다.)

```javascript
var score = 'Hello World';
console.log(score); // 'Hello World'
console.log(window.score); // 'Hello World' (window 전역 객체 참조는 생략이 가능)
```

> **let 키워드로 선언된 변수의 특징**

1\. 변수 중복 선언 금지

let 키워드로 선언된 변수는 동일한 스코프 내에서 이름이 같은 변수를 중복 선언하면 문법 에러가 발생합니다.

2.  블록 레벨 스코프

let 키워드로 선언한 변수는 모든 코드 블록(함수, if 문, for 문, while 문, try/catch 문 등)을 지역 스코프로 인정하는 **블록 레벨 스코프**를 따릅니다.

```javascript
let foo = 1; // 전역 변수

{
  let foo = 2; // 지역 변수
  console.log(foo); // 2
}

console.log(foo); // 1
```

3\. 변수 호이스팅

let 키워드로 선언한 변수는 **변수 호이스팅이 발생하지 않는 것처럼** 동작합니다.

```javascript
console.log(foo); // ReferenceError: foo is not defined
let foo;
```

그 이유는 **let 키워드로 선언한 변수**는 "**선언 단계**"와 "**초기화 단계**"가 분리되어 진행되기 때문입니다. 즉, 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 "**선언 단계**"가 먼저 실행되지만 "**초기화 단계**"는 런타임 이후 변수 선언문에 도달했을 때 실행되기 때문입니다.

![변수 선언](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0uquB%2FbtrSCrd9JHK%2Fp9omg1U9PbvLDAkcrGKh1k%2Fimg.png 'var let const')

```javascript
let foo = 1; // 전역 변수

{
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo = 2; // 지역 변수
}

// 만약 변수 호이스팅이 발생하지 않는다면 위 코드에서 전역 변수 foo의 값을 출력해야 합니다.
// 하지만 let 키워드로 선언한 변수도 여전히 호이스팅이 발생하기 때문에 참조 에러가 발생합니다.
```

✅ 자바스크립트는 ES6에서 도입된 let, const를 포함한 모든 선언문(var, let, const, function, class 등)을 호이스팅 합니다. 단, ES6에서 도입된 let, const, class를 사용한 선언문은 호이스팅이 발생하지 않는 것처럼 동작합니다.

4\. 전역 객체와 let

let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아닙니다. 그러므로 **winodw.foo 처럼 접근할 수 없습니다.** var 키워드와 다르게 보이지 않는 개념적인 블록 내에 별도로 저장되어 관리하게 됩니다.

```javascript
let foo = 1;

console.log(window.foo); // undefined
console.log(foo); // 1
```

> **const 키워드로 선언된 변수의 특징**

1\. 선언과 초기화

const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 합니다. 그렇지 않으면 문법 에러(Syntax Error)가 발생합니다.

2\. 블록 레벨 스코프

let 키워드로 선언한 변수와 동일합니다.

3\. 변수 호이스팅

let 키워드와 동일하게 변수 호이스팅이 발생하지 않는 것처럼 동작합니다.

4\. 재할당 금지

const 키워드로 선언한 변수는 재할당이 금지됩니다. 재할당시 Type Error가 발생합니다.

5\. 상수

const 키워드로 선언한 변수는 상수입니다. 변수의 상대 개념인 상수는 재할당이 금지된 변수를 말합니다. 주의해야 할 점은 const 키워드로 선언한 변수는 재할당을 금지할 뿐 "불변"을 의미하는것이 아닙니다.

\-원시 타입의 값 : 변경 불가능한 값(문자열, 숫자, 불리언, null, undefined, symbol)을 const 키워드로 선언한 변수에 할당할 경우 할당된 값을 변경할 수 있는 방법은 없습니다.

\-객체 타입의 값 : 변경 가능한 값(객체, 배열 등)을 const 키워드로 선언한 변수에 할당한 경우에는 프로퍼티 동적 생성, 삭제, 프로퍼티 값의 변경을 통해 객체의 내용을 변경하는 것은 가능합니다.

|                           | **var**  | **let** | **const** |
| ------------------------- | -------- | ------- | --------- |
| 호이스팅                  | o        | o (TDZ) | o (TDZ)   |
| 값의 재할당               | o        | o       | x         |
| 동일 스코프 중복 선언     | o        | x       | x         |
| 전역 객체 window 프로퍼티 | o        | x       | x         |
