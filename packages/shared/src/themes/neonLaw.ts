import './fonts.css';
import './accessibility.css';
import 'react-datepicker/dist/react-datepicker.css';

import { theme as chakraTheme } from '@chakra-ui/core';

export const theme = Object.assign(chakraTheme, {
  fonts: {
    body: '"HK Grotesk", sans-serif',
    heading: '"Jost", sans-serif',
    mono: '"Fira Mono", monospace',
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
  text: { dark: 'white', light: 'black' },
};
