import { Global, css } from '@emotion/core';
import { colors, gutters } from '../themes/neonLaw';

import React from 'react';
import { theme } from '@chakra-ui/core';

const BaseStyles = () => (
  <Global
    styles={css`
      /* ---------------------------------- */
      /* ----- Basic Setup ----- */
      /* ---------------------------------- */

      :root {
        --lightBlue: #63b3ed;
        --outline: 2px solid var(--lightBlue);
        --grid-max-width: 1240px;
      }

      html {
        overflow-x: hidden;
      }

      body {
        font-size: ${theme.fontSizes.md};
      }

      /* ---------------------------------- */
      /* ----- Headlines & Paragraphs ----- */
      /* ---------------------------------- */

      h1 {
        font-size: ${theme.fontSizes['2xl']};
      }

      h2 {
        font-size: ${theme.fontSizes['xl']};
      }

      h3 {
        font-size: 2rem;
        margin-bottom: ${gutters.xSmall};
      }

      /* ---------------------------------- */
      /* ----- Links & Buttons ----- */
      /* ---------------------------------- */

      .nav-link {
        &--active {
          color: ${colors.cyanLight};

          &::after {
            right: 0;
            background: ${colors.cyanLight};
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
    `}
  />
);

export default BaseStyles;
