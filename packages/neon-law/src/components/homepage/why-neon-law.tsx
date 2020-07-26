import { Box, PseudoBox, theme, useColorMode } from '@chakra-ui/core';
import {
  colors,
  gutters,
  shadows,
  sizes,
} from '@neonlaw/shared-ui/src/themes/neonLaw';

import { Link } from '@neonlaw/shared-ui/src/components/link';
import Placeholder from '../../images/placeholder.jpg';
import Placeholder1 from '../../images/placeholder-1.jpg';
import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';
import styled from '@emotion/styled';

const StyledReasons = styled.div`
  .reason {
    display: flex;

    @media (max-width: 1080px) {
      flex-direction: column-reverse;
    }

    @media (min-width: 1081px) {
      align-items: center;
    }

    &__text {
      flex: 0 0 35%;

      @media (max-width: 1080px) {
        max-width: ${sizes.textContainerSmallOne};
      }

      @media (min-width: 1081px) {
        margin-right: ${gutters.largeOne};
      }
    }

    h3 {
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 1.3;
      margin-bottom: 0.65rem;
      @media (max-width: 767px) {
        font-size: 1.3rem;
      }

      strong {
        display: block;
        font-weight: 400;
        font-size: 3rem;

        @media (max-width: 767px) {
          font-size: 1.9rem;
        }
      }
    }

    &__image {
      min-height: 15rem;
      width: 100%;
      background: url(${Placeholder});
      background-size: cover;
      background-position: center;
      flex: 1;
      box-shadow: ${shadows.light};

      @media (min-width: 401px) {
        min-height: 18rem;
        max-width: 35rem;
      }

      @media (min-width: 601px) {
        max-width: ${sizes.textContainerSmall};
        min-height: 25rem;
      }

      @media (max-width: 1080px) {
        margin-bottom: ${gutters.small};
      }

      @media (min-width: 1081px) {
        min-height: 28rem;
      }
    }

    &:not(:last-child) {
      margin-bottom: ${gutters.huge};

      @media (max-width: 600px) {
        margin-bottom: ${gutters.large};
      }
    }
  }
`;

export interface ReasonProps {
  title: string | JSX.Element;
  text: string;
  image?: string;
}

const reasons: ReasonProps[] = [
  {
    title: (
      <>
        We only represent <strong>Good People</strong>
      </>
    ),
    text:
      "We do not represent shady people and have fired clients after discovering they're racist, transphobic, sexist, or otherwise bad people.",
  },
  {
    title: (
      <>
        We only represent <strong>Good Causes</strong>
      </>
    ),
    text:
      'We do not represent fossil fuel companies, predatory landlords or creditors, or companies that maliciously use your personal data.',
    image: Placeholder1,
  },
  {
    title: (
      <>
        We use technology to make{' '}
        <strong>
          Legal Services
          <br />
          Affordable
        </strong>
      </>
    ),
    text:
      'We leverage document automation, natural language processing, and our own open-source software to deliver cost-effective legal services.',
  },
];

const WhyNeonLaw = () => {
  const { colorMode } = useColorMode();
  return (
    <Section
      styles={{
        backgroundColor: `${colors.lighterBg[colorMode]}`,
      }}
    >
      <h2 className="heading--underlined">Why Neon Law?</h2>
      <p>A justice-first approach to law and litigation.</p>
      <StyledReasons>
        {reasons.map((reason: ReasonProps, i) => (
          <div className="reason" key={new String(reason.title) + `${i}`}>
            <div className="reason__text">
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
              <PseudoBox
                as={Link}
                position="relative"
                display="inline-block"
                marginTop={gutters.xSmall}
                padding=".4rem .3rem"
                borderBottom={`2px solid ${colors.cyanLight}`}
                zIndex={1}
                transition="all .2s"
                _after={{
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: '100%',
                  height: '100%',
                  zIndex: -1,
                  transition: 'all .2s',
                }}
                _hover={{
                  color: colors.text[colorMode],
                  '&::after': {
                    right: 0,
                    background: colors.cyanLight,
                  },
                }}
              >
                Learn More{' '}
                <Box as="span" fontFamily="sans-serif">
                  &nbsp;&rarr;
                </Box>
              </PseudoBox>
            </div>
            <div
              className="reason__image"
              style={
                reason.image ? { backgroundImage: `url(${reason.image})` } : {}
              }
            ></div>
          </div>
        ))}
      </StyledReasons>
    </Section>
  );
};

export default WhyNeonLaw;
