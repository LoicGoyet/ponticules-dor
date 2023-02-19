import type {AppProps} from 'next/app';
import Head from 'next/head';

import {createGlobalStyle} from 'styled-components';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Ponticules d&apos;Or</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

// Reset rules inspired by :
// https://www.joshwcomeau.com/css/custom-css-reset/
// https://piccalil.li/blog/a-modern-css-reset/
const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    line-height: 1.5;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  #__next {
    isolation: isolate;
  }


  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
