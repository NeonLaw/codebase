import { colors, gutters, theme } from './neonLaw';

export const globalStyles = {
  styles: {
    global: ({ colorMode }) => ({
      '.desktop-half-mobile-full-card-link': {
        'img': {
          maxHeight: '350px',
          objectFit: 'cover'
        }
      },
      '.mdx-ul': {
        'li': {
          'p': {
            marginTop: '0'
          }
        }
      },
      '.portal-layout': {
        'h2, .h2': {
          fontSize: '2.5rem'
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
      'h1': {
        fontSize: theme.fontSizes['xl2']
      },
      'h1, h2, h3, h4': {
        color: colorMode === 'light'
          ? colors.text.light
          : theme.colors.white,
        fontWeight: '400 !important',
        lineHeight: '1.35 !important',
      },
      'h2, .h2': {
        '@media (max-width: 767px)': {
          fontSize: '2rem'
        },
        fontSize: theme.fontSizes['xl'],
      },
      'h3, .h3': {
        '@media (max-width: 767px)': {
          fontSize: '1.5rem'
        },
        fontSize: '2rem',
        marginBottom: gutters.xSmall,
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
          position: 'relative',
        }
      },
    })
  }
};