import 'react-datepicker/dist/react-datepicker.css';
import './fonts.css';

import { theme as chakraTheme } from '@chakra-ui/core';

export const theme = Object.assign(chakraTheme, {
  fontSizes: {
    huge: '4rem',
    md: '1.125rem',
    sm: '1rem',
    xl: '3.25rem',
    xl0: '2.50rem',
    xl1: '2.25rem',
  },
  fonts: {
    body: '"HK Grotesk", sans-serif',
    heading: '"Jost", sans-serif',
    mono: '"Fira Mono", monospace',
  },
});

export const colors = {
  background: { dark: theme.colors.gray[800], light: 'white' },
  primary: 'orangered',
};

export const gutters = {
  medium: '3.75rem',
  normal: '2.5rem',
  small: '1.875rem',
  small1: '1.5625rem',
  small2: '1.25rem',
  small3: '0.9375rem',
};

// --gutter-large: 10rem;
//         --gutter-medium: 6rem;
//         --gutter-normal: 4rem;
//         --gutter-small: 3rem;
//         --gutter-small-1: 2.5rem;
//         --gutter-small-2: 2rem;
//         --gutter-small-3: 1.5rem;

export const shadows = {
  light: '0.625rem 0.625rem 1.25rem rgba(0,0,0, .2)',
  light1: '0.425rem 0.425rem .85rem rgba(0,0,0, .15)',
  light15: '0 .2rem .3rem rgba(0,0,0, .125)',
  light2: '0 0.1rem .2rem rgba(0,0,0, .1)',
};
