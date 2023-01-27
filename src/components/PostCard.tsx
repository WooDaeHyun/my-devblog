import { format } from 'date-fns';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import { lighten } from 'polished';
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../styles/colors';
import type { PageContext } from '../templates/post';
import config from '../website-config';

import logoTil from '../content/img/logo-til.png';
import logoCs from '../content/img/logo-cs.png';
import logoEtc from '../content/img/logo-etc.png';
import logoLang from '../content/img/logo-lang.png';
import logoRetro from '../content/img/logo-retro.png';
import logoProject from '../content/img/logo-project.png';

export type PostCardProps = {
  post: PageContext;
  isLarge?: boolean;
};

enum TagType {
  TIL = 'TIL',
  CS = 'CS',
  ETC = 'ETC',
  LANG = 'LANG',
  RETRO = 'RETRO',
  PROJECT = 'PROJECT',
}

const parseType = (tagName: string): TagType => {
  const tagNameUpper = tagName ? tagName.toUpperCase() : '';

  switch (tagNameUpper) {
    case 'TIL':
      return TagType.TIL;
    case 'CS':
      return TagType.CS;
    case 'ETC':
      return TagType.ETC;
    case 'LANG':
      return TagType.LANG;
    case 'RETRO':
      return TagType.RETRO;
    case 'PROJECT':
      return TagType.PROJECT;
    default:
      return TagType.ETC;
  }
};

const getTagLogo = (tagName: string) => {
  switch (parseType(tagName)) {
    case TagType.TIL:
      return logoTil;
    case TagType.CS:
      return logoCs;
    case TagType.RETRO:
      return logoRetro;
    case TagType.LANG:
      return logoLang;
    case TagType.ETC:
      return logoEtc;
    case TagType.PROJECT:
      return logoProject;
    default:
      return logoEtc;
  }
};

export function PostCard({ post, isLarge = false }: PostCardProps) {
  const date = new Date(post.frontmatter.date);
  // 2018-08-20
  const datetime = format(date, 'yyyy-MM-dd');
  // 20 AUG 2018
  const displayDatetime = format(date, 'yyyy LLL dd');

  return (
    <article
      className={`post-card ${post.frontmatter.image ? '' : 'no-image'} ${
        isLarge ? 'post-card-large' : ''
      }`}
      css={[PostCardStyles, isLarge && PostCardLarge]}
    >
      <PostCardContent className="post-card-content">
        <Link className="post-card-content-link" css={PostCardContentLink} to={post.fields.slug}>
          <PostCardHeader className="post-card-header">
            <TaggedImagePrimaryTitleContainer>
              <TaggedImageContainer>
                <Link
                  className="post-card-image-link"
                  css={PostCardImageLink}
                  to={post.fields.slug}
                >
                  <img src={getTagLogo(post.frontmatter.tags[0])} alt={post.frontmatter.tags[0]} />
                </Link>
              </TaggedImageContainer>
              <PrimaryTitleContainer>
                {post.frontmatter.tags && config.showAllTags && (
                  <PostCardPrimaryTag className="post-card-primary-tag">
                    {post.frontmatter.tags.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        {idx > 0 && <>, &nbsp;</>}
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </React.Fragment>
                    ))}
                  </PostCardPrimaryTag>
                )}
                {post.frontmatter.tags && !config.showAllTags && (
                  <PostCardPrimaryTag className="post-card-primary-tag">
                    <Link to={`/tags/${kebabCase(post.frontmatter.tags[0])}/`}>
                      {post.frontmatter.tags[1]}
                    </Link>
                  </PostCardPrimaryTag>
                )}
                <PostCardTitle className="post-card-title">{post.frontmatter.title}</PostCardTitle>
              </PrimaryTitleContainer>
            </TaggedImagePrimaryTitleContainer>
          </PostCardHeader>
          <PostCardExcerpt className="post-card-excerpt">
            <p>{post.frontmatter.excerpt || post.excerpt}</p>
          </PostCardExcerpt>
        </Link>
        <PostCardMeta className="post-card-meta">
          <PostCardBylineContent className="post-card-byline-content">
            <span className="post-card-byline-date">
              <time dateTime={datetime}>{displayDatetime}</time>
              <span className="byline-reading-time">
                <span className="bull" />
              </span>
            </span>
          </PostCardBylineContent>
        </PostCardMeta>
      </PostCardContent>
    </article>
  );
}

const PostCardStyles = css`
  position: relative;
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 0 30px;
  padding: 0 20px 40px;
  min-height: 220px;
  background-size: cover;
  border-bottom: solid 1px lightgrey;
`;

const PostCardLarge = css`
  @media (min-width: 795px) {
    flex: 1 1 100%;
    flex-direction: row;
    padding-bottom: 40px;
    min-height: 280px;
    border-top: 0;

    :not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-content {
      flex: 0 1 361px;
      justify-content: center;
    }

    .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-excerpt p {
      margin-bottom: 1.5em;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }
`;

const PostCardImageLink = css`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`;

const PostCardImage = styled.div`
  width: auto;
  height: 200px;
  background: ${colors.lightgrey} no-repeat center center;
  background-size: cover;

  @media (prefers-color-scheme: dark) {
    background: ${colors.darkmode};
  }
`;

const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const PostCardContentLink = css`
  position: relative;
  display: block;
  /* color: var(--darkgrey); */
  color: ${colors.darkgrey};

  :hover {
    text-decoration: none;
  }
`;

const TaggedImagePrimaryTitleContainer = styled.div`
  display: flex;
`;

const PrimaryTitleContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const TaggedImageContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 5px;
  margin-right: 10px;
  background-color: white;

  img {
    width: 100%;
    height: 100%;
  }
`;

const PostCardPrimaryTag = styled.div`
  margin: 0 0 0.2em;
  /* color: var(--blue); */
  color: ${colors.blue};
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const PostCardTitle = styled.h2`
  margin: 0 0 0.4em;
  line-height: 1.15em;
  transition: color 0.2s ease-in-out;

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.85);
  }
`;

const PostCardExcerpt = styled.section`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell;

  @media (prefers-color-scheme: dark) {
    /* color: color(var(--midgrey) l(+10%)); */
    color: ${lighten('0.1', colors.midgrey)} !important;
  }
`;

const PostCardMeta = styled.footer`
  display: flex;
  align-items: flex-start;
  padding: 0;
`;

const PostCardBylineContent = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  margin: 4px 0 0 10px;
  /* color: color(var(--midgrey) l(+10%)); */
  color: ${lighten('0.1', colors.midgrey)};
  font-size: 1.2rem;
  line-height: 1.4em;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-transform: uppercase;

  span {
    margin: 0;
  }

  a {
    /* color: color(var(--darkgrey) l(+20%)); */
    color: ${lighten('0.2', colors.darkgrey)};
    font-weight: 600;
  }

  @media (prefers-color-scheme: dark) {
    a {
      color: rgba(255, 255, 255, 0.75);
    }
  }
`;

const PostCardHeader = styled.header`
  margin: 15px 0 0;
`;

export const StaticAvatar = css`
  display: block;
  overflow: hidden;
  margin: 0 0 0 -6px;
  width: 34px;
  height: 34px;
  border: #fff 2px solid;
  border-radius: 100%;

  @media (prefers-color-scheme: dark) {
    /* border-color: color(var(--darkgrey) l(+2%)); */
    border-color: ${lighten('0.02', colors.darkgrey)};
  }
`;
