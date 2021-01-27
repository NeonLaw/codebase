import 'react-datepicker/dist/react-datepicker.css';
import './fonts.css';

import { theme as chakraTheme } from '@chakra-ui/core';

export const theme = Object.assign(chakraTheme, {
  fontSizes: {
    huge: '4.688rem',
    large: '3.225rem',
    large1: '2.7rem',
    md: '1.125rem',
    medium: '1.563rem',
    normal: '1.188rem',
    sm: '1rem',
    xl: '3.25rem',
    xl0: '2.50rem',
    xl1: '2.25rem',
    xl2: '3.5rem'
  },
  fonts: {
    body: '"HK Grotesk", sans-serif',
    heading: '"Jost", sans-serif',
    mono: '"Fira Mono", monospace',
  },
});

export const colors = {
  black: theme.colors.black,
  blackLight: '#111',
  blackLight1: '#222',
  blackLight2: '#252525',
  offWhite: '#f9f9f9',
  primary: 'orangered',
  skyblue: 'royalblue',
  white: theme.colors.white,
};

export const borders = {
  light: '1px solid #eee',
};

export const gutters = {
  large: '6.25rem',
  medium: '3.75rem',
  normal: '2.5rem',
  small: '1.875rem',
  small1: '1.5625rem',
  small2: '1.25rem',
  small3: '0.9375rem',
};

export const shadows = {
  light: '0.625rem 0.625rem 1.25rem rgba(0,0,0, .2)',
  light1: '0.425rem 0.425rem .85rem rgba(0,0,0, .15)',
  light15: '0 .2rem .3rem rgba(0,0,0, .125)',
  light2: '0 0.1rem .2rem rgba(0,0,0, .1)',
};

export const gradients = {
  dark: `linear-gradient(${colors.blackLight1}, ${colors.blackLight})`,
};