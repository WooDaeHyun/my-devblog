---
title: '삼항 조건 연산자 vs filter()'
author: [woodaehyun]
tags: [TIL, lang, react]
image: null
date: '2023-01-03T23:23:00.000Z'
draft: false
excerpt: '순간적으로 생각난 방식인 삼항 조건 연산자로 해당 코드를 구현했고 잘 동작하는 것을 확인했지만 보다시피 가독성이 현저하게 떨어지는것을 확인할 수 있다. 강사님은 어떻게 코드를 구현했는지 확인했다.'
---

```javascript
//삼항 조건 연산자로 표현
const EmojiList = ({ emojis, keyword }) => {
  return (
    <Container>
      {emojis.map(emoji => {
        return keyword === '' ? (
          <EmojiListItem emoji={emoji} key={emoji.title}></EmojiListItem>
        ) : emoji.title.includes(keyword) || emoji.keywords.includes(keyword) ? (
          <EmojiListItem emoji={emoji} key={emoji.title}></EmojiListItem>
        ) : undefined;
      })}
    </Container>
  );
};

export default EmojiList;
```

데브코스 리액트 강의를 들으면서 실습을 하는 중에 검색을 통해 일치하는 데이터를 렌더링하는 기능을 만들게 되었고,

_**강의의 해당 부분을 듣기전에 스스로 먼저 만들어보면 좋겠다는 생각으로 코드를 먼저 구현해 보았다.**_ 여태까지 조건문 대신 **_삼항 조건 연산자, 논리 곱(&&), 논리 합(||)_**으로 표현을 많이해서 순간적으로 생각난 방식인 삼항 조건 연산자로 해당 코드를 구현했고 잘 동작하는 것을 확인했지만 보다시피 가독성이 현저하게 떨어지는것을 확인할 수 있다.

_**코드를 간략하게 설명해보면 keyword의 값이 ""빈 문자열 이라면 전체 데이터를 보여주고, 그게 아니라면 keyword의 값을 emoji.title과 emoji.keywords에 들어가 있는지를 판단하여 true인 데이터만 렌더링하도록 설정했다.**_

바로 데브코스 강의를 통해서 강사님은 어떻게 코드를 구현했는지 확인했다. 강사님은 **_filter( ) 배열 고차 함수_**를 이용해서 코드를 작성하셨다.

```javascript
//filter()로 구현

const EmojiList = ({ emojis, keyword }) => {
  return (
    <Container>
      {emojis
        .filter(emoji => {
          return emoji.title.indexOf(keyword) >= 0 || emoji.keywords.indexOf(keyword) >= 0;
        })
        .slice(0, 10)
        .map(emoji => {
          return <EmojiListItem emoji={emoji} key={emoji.title}></EmojiListItem>;
        })}
    </Container>
  );
};

export default EmojiList;
```

한 눈에 비교해도 filter()로 구현한 코드가 깔끔하고 보기가 좋은것을 확인할 수 있다. **Array에 유용한 고차 함수들을 최대한 활용하는것이 가독성 측면에서 큰 도움이 될 것 같다.**

![그냥 올림](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqOWbV%2FbtrUgjziuKw%2F2Oazzz1oTkdTq3GIXAndOK%2Fimg.png, '그냥 올림')

위의 사진은 방금 만들어본 Emoji Search 페이지이다. 그냥 올려보았다..🥲
