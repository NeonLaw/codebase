import { Global, css } from '@emotion/core';

import React from 'react';

export const BaseStyles = () => (
  <Global
    styles={css`
      /* --------------------------------------- */
      /* ----- Basic Setup ----- */
      /* --------------------------------------- */

      :root {
        --grid-max-width: 1180px;

        --gutter-large: 10rem;
        --gutter-medium: 6rem;
        --gutter-normal: 4rem;
        --gutter-small: 3rem;
        --gutter-small-1: 2.5rem;
        --gutter-small-2: 2rem;

        --font-size-huge: 7.5rem;
        --font-size-large: 5rem;
        --font-size-medium: 2.5rem;
        --font-size-default: 1.8rem;
        --font-size-normal: 1.9rem;
        --font-size-normal-1: 2rem;

        --primary: orangered;
        --black: #000;
        --black-light: #111;
        --black-light-1: #222;
        --black-light-2: #252525;

        --white: #fff;
        --off-white: #e4e4e4;
      }

      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }

      html {
        font-size: 62.5%;

        @media(max-width: 900px) {
          font-size: 57%;
        }
      }

      body {
        font-size: var(--font-size-default);
        line-height: 1.6;
        color: var(--off-white);
        background: var(--black);
        box-sizing: border-box;
        overflow-x: hidden;
      }

      .row {
        max-width: var(--grid-max-width);
        width: 90%;
        margin: 0 auto;
      }

      section {
        padding: 10rem 0;
      }

      /* --------------------------------------- */
      /* ----- Headlines & Paragraphs ----- */
      /* --------------------------------------- */

      h1,
      h2,
      h3,
      h4 {
        line-height: 1.3;
        color: var(--white);
      }

      h1 {
        font-size: var(--font-size-huge);

        @media(max-width: 800px) {
          font-size: 6rem;
        }
      }

      h2 {
        font-size: var(--font-size-large);
        margin-bottom: var(--gutter-normal);

        @media(max-width: 800px) {
          font-size: 4rem;
        }
      }

      h2::after {
        content: '';
        display: block;
        height: 2px;
        width: 10rem;
        margin: var(--gutter-small) 0;
        background: var(--primary);
      }

      h3 {
        font-size: var(--font-size-medium);
        margin-bottom: var(--gutter-small-2);
      }

      /* --------------------------------------- */
      /* ----- Buttons & Links ----- */
      /* --------------------------------------- */

      a {
        color: skyblue;
      }

      .btn {
        display: inline-block;
        padding: 1.2rem 3.5rem;
        text-decoration: none;
        color: inherit;
        border: 1px solid;
        font-weight: 500;
        border-radius: 10rem;

        &--cta {
          border-color: var(--primary);
          background: var(--primary);
        }
      }
    `}
  />
);
