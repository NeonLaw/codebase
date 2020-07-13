import { Global, css } from '@emotion/core';

import React from 'react';
import { colors } from '@themes/neonLaw';
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

      body {
        font-size: ${theme.fontSizes.md};
      }

      /* ---------------------------------- */
      /* ----- Links & Buttons ----- */
      /* ---------------------------------- */

      .nav-link {
        position: relative;
        transition: all 0.2s;
        padding-bottom: 0.5em;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 100%;
          display: block;
          height: 1px;
          background: white;
          transition: all 0.4s cubic-bezier(0, 0.5, 0, 1);
        }

        &:hover {
          color: ${colors.orangeDark};

          &::after {
            right: 0;
            background: ${colors.orangeDark};
          }
        }
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
