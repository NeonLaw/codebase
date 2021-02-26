import { Global, css } from '@emotion/react';
import { gutters, theme } from './deleteYourData';
import React from 'react';

export const DeleteYourDataStyles = () => (
  <Global
    styles={css`
      /* --------------------------------------- */
      /* ----- Basic Setup ----- */
      /* --------------------------------------- */

      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }

      body {
        font-family: "HK Grotesk", sans-serif;
        line-height: 1.6;
        box-sizing: border-box;
        overflow-x: hidden;
      }

      /* --------------------------------------- */
      /* ----- Headlines & Paragraphs ----- */
      /* --------------------------------------- */

      h1,
      h2,
      h3,
      h4 {
        font-family: "Jost", sans-serif;
        line-height: 1.3;
        font-weight: 400;
      }

      h1 {
        font-size: ${theme.fontSizes.huge};

        @media(max-width: 800px) {
          font-size: ${theme.fontSizes.large};
        }
      }

      h2 {
        font-size: ${theme.fontSizes.large};
        margin-bottom: ${gutters.normal};

        @media(max-width: 800px) {
          font-size: ${theme.fontSizes.large1};
        }

        &::after {
          margin: ${gutters.small} 0;
        }
      }

      h3 {
        font-size: ${theme.fontSizes.medium};
        margin-bottom: ${gutters.small3};
      }
    `}
  />
);
