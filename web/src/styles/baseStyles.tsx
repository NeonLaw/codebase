import { Global, css } from '@emotion/react';

interface BaseStylesProps {
  dir?: 'ltr' | 'rtl';
}

export const BaseStyles = ({ dir }: BaseStylesProps): JSX.Element => (
  <Global
    styles={css`
      html {
        direction: ${dir === 'rtl' ? 'rtl' : ''};
      }

      body {
        font-family: ${dir === 'rtl' ? 'Noto Naskh Arabic' : 'Hk Grotesk'},
          sans-serif;
      }

      h1,
      h2,
      h3,
      h4 {
        font-family: ${dir === 'rtl' ? 'Noto Naskh Arabic' : 'Jost'},
          sans-serif ${dir.length && '!important'};
      }
    `}
  />
);
