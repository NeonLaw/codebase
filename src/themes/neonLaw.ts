import 'react-datepicker/dist/react-datepicker.css';

import { theme as chakraTheme } from '@chakra-ui/core';

export const theme = Object.assign(chakraTheme, {
  fonts: {
    body: '"Hk Grotesk", sans-serif',
    heading: '"Jost", sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    md: '1.125rem',
    xl: '3.25rem',
  },
});

export const colors = {
  background: { dark: 'gray.800', light: 'white' },
  link: { dark: 'cyan.400', light: 'cyan.800' },
  primaryButtonBg: {
    dark: 'cyan.200',
    light: 'cyan.800',
    lightBlue: '#1AA6E4',
  },
  primaryButtonBgOnHover: { dark: 'cyan.100', light: 'cyan.700' },
  primaryButtonColor: { dark: 'black', light: 'white' },
  text: { dark: 'white', darkLight: '#eee', light: '#222' },
  orange: '#f37b19',
  orangeDark: '#f99c17',
};

export const sizes = {
  textContainerSmall: '700px',
};

export const gutters = {
  large: '7.5rem',
  largeOne: '6.25rem',
  xSmall: '1.25rem', // todo convert to rem for better accessibility
  small: '1.875rem',
};
