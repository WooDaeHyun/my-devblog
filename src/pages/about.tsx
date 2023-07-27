/* eslint-disable react/jsx-child-element-spacing */
import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';
import styled from '@emotion/styled';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

function About() {
  return (
    <IndexLayout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">ABOUT ME</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <MyInfo>
                    <div className="myInfoWrapper">
                      <div className="myInfoTitle">MY CHANNEL</div>
                      <ul className="myInfoContent">
                        <li>
                          <a href="https://woodaefolio.com">Web portfolio</a>
                        </li>
                        <li>
                          <a href="https://github.com/WooDaeHyun">Github repo</a>
                        </li>
                        <li>
                          <a href="https://pinetree93.tistory.com">Tistory blog</a>
                        </li>
                        <li>po668312@naver.com</li>
                      </ul>
                    </div>
                  </MyInfo>
                  <hr />
                  <FirstQuestion>
                    <h3>WHY DEV?</h3>
                    <br />
                    <p>
                      &nbsp;&nbsp;<b>오늘(2023.07.27)</b>을 기준으로 개발 공부에만 집중한지 어느덧
                      1년하고도 2개월이 되어가고 있네요.🥹 저는 정확하게 <b>2022.06.01</b>부터
                      이전까지 공부하던 것들을 멈추고 <strong>파이썬</strong>과 함께 개발 공부를
                      시작습니다.
                      <a href="https://pinetree93.tistory.com/2">(파이썬 회고).</a>
                      <br />
                      <br />
                      &nbsp;&nbsp;사실 시작은 개발자 지인과의 <b>사소한 대화</b>에서 비롯되었습니다.
                      저에게 소소해보이는 기능을 새로 접하는 경험은 항상 좋은 경험이었고 때로는
                      그러한 기능들이 좋아 어떻게 만들어진 것인지 궁금해 하기도 했었습니다. 그러나
                      현실적으로 알아보면 대부분은 많은 기술 용어들 때문에 이해할 수 없었습니다.
                      어느 날 개발자인 친구가 <b>렌더링 된 html</b>을 가지고 개발자 도구를 이용해
                      저에게 장난을 쳤고, 저는 작동 원리에 대해 물어본 적이 있습니다. 아주
                      간략하게&nbsp;
                      <b>dns</b>, <b>서버</b>, <b>html</b>, <b>브라우저</b> 등 웹 환경에 대한
                      전반적인 이야기를 개발자가 아닌 제가 들어도 이해하기 쉽게 설명해 주었습니다.
                      <b>
                        대화를 통해 눈에 보이지는 않지만 공장의 기계가 동작하는 원리와 크게 다르지
                        않다는 생각을 어렴풋이 하게 되었습니다.
                      </b>{' '}
                      그리고 이러한 사실은 개발자가 되는게 나와 거리가 먼 이야기는 아니라는 생각으로
                      이어졌고 그 이후 공부를 시작하게 되었습니다.
                      <br />
                      <br />
                      &nbsp;&nbsp;그리고 개발 공부를 시작하기 이전에는 막연하게 사용했던 웹, 앱
                      애플리케이션들이 <code>렌더링 엔진</code>과<code>자바스크립트 엔진</code>의
                      역할을 알고, 자바스크립트의 엔진의 <code>싱글 스레드</code>라는 특징으로 인한
                      <code>비동기 처리</code>의 필요성, 그리고 이러한 자바스크립트 코드를 활용하여
                      비동기로 통신하는 <code>Ajax 방식</code>의 등장 등 전반적인{' '}
                      <code>브라우저 렌더링 과정과 역사</code>을 이해하고 바라보니 이제는{' '}
                      <b>
                        웹 페이지가 다르게 보이기 시작했고 이러한 것들을 스스로 알아가고 있다는
                        사실이 너무 재미있습니다.
                      </b>
                      <br />
                      <br />
                      &nbsp;&nbsp;또 프로젝트에 참여면서 기능들을 개발해 나갈 때{' '}
                      <code>검색 기능</code>, <code>포스트 작성 경과 시간 계산 기능</code>,{' '}
                      <code>내가 설정한 조건에 따라 사용자에게 정보를 제공</code>하는 등{' '}
                      <b>나의 생각이 들어가 만들어진 논리적인 기능들</b>이{' '}
                      <b>유저들에게 직접적인 영향</b>을 미치고 평가를 받는다는 사실이 매우 떨리고
                      흥분되기도 합니다. 또 가끔은 제가 생각하지도 못한 문제 해결 방법들이 다른
                      개발자에 의해서 효율적이고 논리적인 코드로 구현된 것을 보면 감탄과 함께
                      짜릿함을 느낄 때가 있습니다. 그리고{' '}
                      <b>
                        이러한 것들이 개발자라는 직업의 매력이라 생각하고 제가 개발자가 되고자 하는
                        이유입니다.
                      </b>
                      <br />
                      <br />
                    </p>
                  </FirstQuestion>
                  <hr />
                  <SecondQuestion>
                    <h3>WHY FRONTEND?</h3>
                    <br />
                    <p>
                      &nbsp;&nbsp;개발자가 되기 위해 결심한 이유와 마찬가지로, 새로운 기능을 접하고
                      경험하는 것을 좋아합니다.{' '}
                      <b>
                        그리고 UI와 UX에 관심이 많았습니다. 학창시절 PSP, 클릭스, 아이팟 터치 등,
                        ui로 유명한 기기들을 가지고 게임을 하고 음악을 듣는 것 외에도 기기 자체를
                        만지고 조작하는 것 자체를 좋아했습니다.
                      </b>{' '}
                      그러한 관심은 지금까지 이어졌고 모바일을 필두로 웹 환경이 발전하는 것을
                      지켜보며 한 발자국 뒤에서 그저 신기해 하기만 했었습니다. 그리고 웹이라는
                      세상에서 처음으로 어떤 원리로 동작하게 되는지 작게나마 알게 되었을 때, 내가
                      하는 것이 불가능하다고 생각했던 일을 노력하면 나도 할 수 있겠다는 생각이
                      들었습니다.
                      <br />
                      <br />
                      <b>
                        &nbsp;&nbsp;그리고 지금 저의 가장 큰 꿈은 제가 느꼈던 소소해 보일 수 있지만
                        신기하면서도 편리한 경험을 남들에게 전해주는 것입니다. 또한 평소에는
                        의식하지 못하는 사소한 불편함에 관심을 기울이고 개발을 통해 이를 해결해낼 수
                        있는 개발자가 되는 것이 목표입니다.
                      </b>{' '}
                      그래서 이것들이 직접 맞닿아 있는 <b>클라이언트단</b>에서 기능을 구현하고
                      싶습니다. 그리고 이를 바탕으로 사용자들과 소통하고 이러한 소통을 바탕으로 보다
                      성장하는 개발자가 되고 싶었습니다. 그래서 자연스럽게 <b>웹 프론트엔드 분야</b>
                      로 진출하고자 결심했습니다.
                    </p>
                  </SecondQuestion>
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
}

export default About;

const MyInfo = styled.div`
  align-items: center;

  .myInfoWrapper {
    margin-top: 20px;
  }

  .myInfoTitle {
    font-size: 25px;
    font-weight: 700;
  }

  .myInfoContent {
    margin-left: 25px;
    font-size: 18px;
  }

  img {
    border-radius: 45%;
    margin-right: 20px;
  }
`;

const FirstQuestion = styled.p``;
const SecondQuestion = styled.p``;
