import 'react-datepicker/dist/react-datepicker.css';
import './fonts.css';

import { theme as chakraTheme } from '@chakra-ui/core';

export const theme = Object.assign(chakraTheme, {
  fontSizes: {
    md: '1.125rem',
    xl: '3.25rem',
  },
  fonts: {
    body: '"HK Grotesk", sans-serif',
    heading: '"Jost", sans-serif',
    mono: '"Fira Mono", monospace',
  },
});

export const colors = {
  background: { dark: 'gray.800', light: 'white' },
  borderLight: { dark: theme.colors.gray[800], light: theme.colors.gray[50] },
  cyanDark: theme.colors.cyan[900],
  cyanDark1: theme.colors.cyan[800],
  cyanLight: theme.colors.cyan[400],
  link: { dark: 'cyan.400', light: 'cyan.800' },
  primaryButtonBg: {
    dark: 'cyan.400',
    light: 'cyan.900',
    lightBlue: '#1AA6E4',
  },
  primaryButtonBgOnHover: { dark: 'cyan.300', light: 'cyan.500' },
  primaryButtonColor: { dark: 'black', light: 'white' },
  text: { dark: 'white', darkLight: '#eee', light: '#222' },
};

export const sizes = {
  textContainerSmall: '700px',
};

export const gutters = {
  large: '7.5rem',
  largeOne: '6.25rem',
  medium: '3.5rem',
  small: '1.875rem',
  xSmall: '1.25rem',
};
