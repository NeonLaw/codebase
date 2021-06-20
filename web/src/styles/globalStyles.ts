import { colors, gutters, theme } from './neonLaw';

export const globalStyles = {
  styles: {
    global: {
      '.desktop-half-mobile-full-card-link': {
        'img': {
          maxHeight: '350px',
          objectFit: 'cover'
        }
      },
      'a': {
        '&:focus': {
          color: colors.primaryColor400
        },
        '&:hover': {
          color: colors.primaryColor400,
        },
        cursor: 'pointer',
        textDecoration: 'underline',
        transition: 'all .2s',
      },
      'li': {
        listStyle: 'none',
      },
      'ul': {
        'li': {
          '&::before': {
            color: theme.colors.cyan[400],
            content: '"—"',
            left: `calc(${gutters.small} * -1)`,
            position: 'absolute',
          },
          marginLeft: gutters.small,
          'p': {
            margin: 0,
          },
          position: 'relative',
        }
      },
    }
  }
};