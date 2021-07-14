import { colors, gutters, sizes, theme } from './neonLaw';

import { colors as DydColors } from './deleteYourData';

export const globalStyles = {
  styles: {
    global: ({ colorMode }) => ({    
      '.desktop-half-mobile-full-card-link': {
        'img': {
          maxHeight: '350px',
          objectFit: 'cover'
        }
      },
      '.full-bleed': {
        left: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        position: 'relative',
        right: '50%',
        width: '100vw',
      },
      '.heading__underlined': {
        '&--centered': {
          '&::after': {
            marginLeft: 'auto',
            marginRight: 'auto',
          }
        },
        '&--cyan': {
          '&::after': {
            background: colors.primaryColor400,
          }
        },
        '&--orange': {
          '&::after': {
            background: DydColors.primary,
          }
        },
        '&::after': {
          content: '""',
          display: 'block',
          height: '2px',
          margin: `${gutters.xSmallOne} 0`,
          width: '8rem',
        },
      },
      '.mdx-ul': {
        'li': {
          'p': {
            marginTop: '0'
          }
        }
      },
      '.nav-content': {
        '&-desktop': {
          '@media (min-width: 1201px)': {
            display: 'flex',
          },
          display: 'none',
        },
        '&-mobile': {
          '@media (min-width: 1201px)': {
            display: 'none !important',
          }
        }
      },
      '.nav-link': {
        '&--active': {
          '&::after': {
            background: colors.primaryColor400,
          },
          color: colors.primaryColor400,
        }
      },
      '.outline-bordered': {
        border: '2px solid transparent',
      },
      '.portal-layout': {
        'h2, .h2': {
          fontSize: '2.5rem'
        }
      },
      '.row': {
        margin: '0 auto',
        maxWidth: 'var(--grid-max-width)',
        width: '90%',
      },
      '.visually-hidden': {
        height: '1px',
        left: '-100000rem',
        overflow: 'hidden',
        position: 'absolute',
        top: 'auto',
        width: '1px',
      },
      '.wrapper': {
        '&--centered': {
          margin: ' 0 auto',
          maxWidth: sizes.textContainerMedium,
          padding: gutters.small,
        }
      },
      ':root': {
        '--grid-max-width': '1240px',
        '--lightBlue': '#63b3ed',
        '--outline': '2px solid var(--lightBlue)',
        '--outline-transparent': '2px solid transparent',
      },
      '@keyframes pulse': {
        '0%': {
          transform: 'scale(0.9)',
        },
        '100%': {
          transform: 'scale(1.02)',
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
      /* eslint-disable-next-line max-len */
      'a:focus, a:active, button::-moz-focus-inner, input::-moz-focus-inner, select::-moz-focus-inner': {
        border: 0,
      },
      'body': {
        fontSize: theme.fontSizes.md
      },
      'body.user-is-tabbing': {
        '.breadcrumb:focus': {
          boxShadow: 'none',
        },
        '.outline-bordered:focus': {
          border: 'var(--outline)',
          outline: 'none',
        },
      },
      'body:not(.user-is-tabbing)': {
        'button:focus, input:focus, select:focus, textarea:focus, a:focus': {
          outline: 'none',
        }
      },
      'button:focus, input:focus, select:focus, textarea:focus, a:focus': {
        outline: 'var(--outline)',
      },
      'code': {
        color: `${colors.text.darkLight} !important`,
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
      'html': {
        overflowX: 'hidden'
      },
      'img': {
        objectFit: 'contain'
      },
      'li': {
        listStyle: 'none',
      },
      section: {
        '@media (max-width: 600px)': {
          padding: `${gutters.largeTwo} 0`,
        },
        padding: `${gutters.largeOne} 0`,
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