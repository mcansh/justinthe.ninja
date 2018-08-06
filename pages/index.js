import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Twitter from '../static/twitter.svg'
import Instagram from '../static/instagram.svg'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(https://justinthe.ninja/img/kanye.png);
  background-position: center;
  background-size: cover;
  line-height: 1;

  h1 {
    padding: 2rem 4rem;
    font-size: 4.8rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  p {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.5;
  }

  div {
    display: flex;
  }
`;

const SocialLink = styled.a`
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.15s ease-out 0s;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  svg {
    height: 4rem;
    width: 4rem;
  }

  &.twitter:hover {
    color: #1da1f2;
  }

  &.instagram:hover {
    color: #b900b4;
  }
`;

const Index = () => (
  <>
    <Head>
      <title>Justin</title>
    </Head>
    <Main>
      <h1>Justin</h1>
      <h2>This is a god dream</h2>
      <p>Shoes // Red Bull // Cars</p>
      <div>
        <Link href="https://twitter.com/justinistech" passHref>
          <SocialLink className="twitter" title="Twitter">
            <Twitter />
          </SocialLink>
        </Link>
        <Link href="https://instagram.com/jtn78" passHref>
          <SocialLink className="instagram" title="Instagram">
            <Instagram />
          </SocialLink>
        </Link>
      </div>
    </Main>
  </>
);

export default Index;
