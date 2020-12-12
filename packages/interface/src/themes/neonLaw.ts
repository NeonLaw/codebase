import 'react-datepicker/dist/react-datepicker.css';
import './fonts.css';

import { theme as chakraTheme } from '@chakra-ui/core';

export const theme = Object.assign(chakraTheme, {
  fontSizes: {
    md: '1.125rem',
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
  black1: '#151515',
  borderLight: { dark: theme.colors.gray[800], light: theme.colors.gray[50] },
  borders: {
    dark: theme.colors.gray[700],
    light: theme.colors.gray[100],
  },
  inputBorders: {
    dark: theme.colors.gray[700],
    light: theme.colors.gray[300],
  },
  lighterBg: { dark: theme.colors.gray[700], light: theme.colors.gray[50] },
  link: { dark: 'cyan.400', light: 'cyan.800' },
  primaryButtonBg: {
    dark: 'cyan.400',
    light: 'cyan.900',
    lightBlue: '#1AA6E4',
  },
  primaryButtonBgOnHover: { dark: 'cyan.300', light: 'cyan.500' },
  primaryButtonColor: { dark: 'black', light: 'white' },
  primaryColor400: theme.colors.cyan[400],
  primaryColor800: theme.colors.cyan[800],
  primaryColor900: theme.colors.cyan[900],
  text: { dark: 'white', darkLight: '#eee', light: '#222' },
  textareaBackground: { dark: theme.colors.gray[800], light: 'white' },
  textareaToolbarActiveBackground: {
    dark: theme.colors.gray[600],
    light: theme.colors.gray[600],
  },
  textareaToolbarBackground: {
    dark: theme.colors.gray[600],
    light: theme.colors.gray[600],
  }
};

export const sizes = {
  textContainerMedium: '850px',
  textContainerMediumOne: '800px',
  textContainerSmall: '680px',
  textContainerSmallOne: '600px',
  textContainerSmallTwo: '620px',
  textContainerXSmall: '580px'
};

export const gutters = {
  huge: '10rem',
  large: '7.5rem',
  largeOne: '6.25rem',
  largeTwo: '5rem',
  medium: '3.5rem',
  small: '1.875rem',
  xSmall: '1.25rem',
  xSmallOne: '1rem',
};

export const shadows = {
  light: '0.625rem 0.625rem 1.25rem rgba(0,0,0, .2)',
  light1: '0.425rem 0.425rem .85rem rgba(0,0,0, .15)',
  light15: '0 .2rem .3rem rgba(0,0,0, .125)',
  light2: '0 0.1rem .2rem rgba(0,0,0, .1)',
};
