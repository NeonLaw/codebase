import { Box, PseudoBox, useColorMode } from '@chakra-ui/core';
import {
  colors,
  gutters,
  shadows,
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
    align-items: center;

    &__text {
      flex: 0 0 35%;
      margin-right: ${gutters.largeOne};
    }

    h3 {
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 1.3;
      margin-bottom: 0.85rem;

      strong {
        display: block;
        font-weight: 400;
        font-size: 3rem;
      }
    }

    &__image {
      min-height: 28rem;
      background: url(${Placeholder});
      background-size: cover;
      background-position: center;
      flex: 1;
      box-shadow: ${shadows.light};
    }

    &:not(:last-child) {
      margin-bottom: ${gutters.huge};
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
                Read More{' '}
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
