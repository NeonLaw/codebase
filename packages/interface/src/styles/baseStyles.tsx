import { Global, css } from '@emotion/core';
import { colors, gutters } from '../themes/neonLaw';

import { colors as DydColors } from '../themes/deleteYourData';
import React from 'react';
import { theme } from '@chakra-ui/core';

export const BaseStyles = (): JSX.Element => (
  <Global
    styles={css`
      /* ---------------------------------- */
      /* ----- Basic Setup ----- */
      /* ---------------------------------- */

      :root {
        --lightBlue: #63b3ed;
        --outline: 2px solid var(--lightBlue);
        --outline-transparent: 2px solid transparent;
        --grid-max-width: 1240px;
      }

      html {
        overflow-x: hidden;
      }

      body {
        font-size: ${theme.fontSizes.md};
      }

      .row {
        max-width: var(--grid-max-width);
        width: 90%;
        margin: 0 auto;
      }

      section {
        padding: ${gutters.largeOne} 0;

        @media (max-width: 600px) {
          padding: ${gutters.largeTwo} 0;
        }
      }

      /* ---------------------------------- */
      /* ----- Headlines & Paragraphs ----- */
      /* ---------------------------------- */

      h1,
      h2,
      h3,
      h4 {
        font-family: 'Jost', sans-serif;
        font-weight: 400;
        line-height: 1.35 !important;
      }

      h1 {
        font-size: ${theme.fontSizes['2xl']};
      }

      h2 {
        font-size: ${theme.fontSizes['xl']};

        @media (max-width: 767px) {
          font-size: 2rem;
        }
      }

      h3 {
        font-size: 2rem;
        margin-bottom: ${gutters.xSmall};

        @media (max-width: 767px) {
          font-size: 1.5rem;
        }
      }

      code {
        color: ${colors.text.darkLight} !important;
      }

      .heading__underlined {
        &::after {
          content: '';
          display: block;
          height: 2px;
          width: 8rem;
          height: 2px;
          margin: ${gutters.xSmallOne} 0;
        }

        &--cyan {
          &::after {
            background: ${colors.primaryColor400};
          }
        }

        &--orange {
          &::after {
            background: ${DydColors.primary};
          }
        }

        &--centered {
          &::after {
            margin-left: auto;
            margin-right: auto;
          }
        }
      }

      /* ---------------------------------- */
      /* ----- Links & Buttons ----- */
      /* ---------------------------------- */

      .nav-link {
        &--active {
          color: ${colors.primaryColor400};

          &::after {
            right: 0;
            background: ${colors.primaryColor400};
          }
        }
      }

      /* ---------------------------------- */
      /* ----- Images ----- */
      /* ---------------------------------- */

      img {
        object-fit: contain;
      }

      /* ---------------------------------- */
      /* ----- Accessibility ----- */
      /* ---------------------------------- */

      a:focus,
      a:active,
      button::-moz-focus-inner,
      input::-moz-focus-inner,
      select::-moz-focus-inner {
        border: 0;
      }

      button:focus,
      input:focus,
      select:focus,
      textarea:focus,
      a:focus {
        outline: var(--outline);
      }

      body:not(.user-is-tabbing) {
        button:focus,
        input:focus,
        select:focus,
        textarea:focus,
        a:focus {
          outline: none;
        }
      }

      .outline-bordered {
        border: 2px solid transparent;
      }

      body.user-is-tabbing {
        .outline-bordered:focus {
          outline: none;
          border: var(--outline);
        }

        .breadcrumb:focus {
          box-shadow: none;
        }
      }

      /* ---------------------------------- */
      /* ----- Utils and Helpers ----- */
      /* ---------------------------------- */

      .full-bleed {
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      }

      .visually-hidden {
        position: absolute;
        left: -100000rem;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }

      /* ---------------------------------- */
      /* ----- Animations ----- */
      /* ---------------------------------- */

      @keyframes pulse {
        0% {
          transform: scale(0.9);
        }
        100% {
          transform: scale(1.02);
        }
      }

      /* ---------------------------------- */
      /* ----- Others ----- */
      /* ---------------------------------- */

      .nav-content {
        &-desktop {
          display: none;
          @media (min-width: 1201px) {
            display: flex;
          }
        }

        &-mobile {
          @media (min-width: 1201px) {
            display: none !important;
          }
        }
      }
    `}
  />
);
