import { Box, PseudoBox, useColorMode } from '@chakra-ui/core';
import {
  colors,
  gutters,
  shadows,
  sizes,
} from '@neonlaw/shared-ui/src/themes/neonLaw';

import { Link } from '@neonlaw/shared-ui/src/components/link';
import Placeholder from '../../images/placeholder.jpg';
import React from 'react';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';

export interface ReasonProps {
  title: string;
  text: string;
  image?: string;
}

const StyledReason = styled.div`
  display: flex;

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 1081px) {
    align-items: center;
  }

  .text {
    flex: 0 0 35%;

    @media (max-width: 1080px) {
      max-width: ${sizes.textContainerSmallOne};
    }

    @media (min-width: 1081px) {
      margin-right: ${gutters.largeOne};
    }
  }

  h3 {
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

  .image {
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
`;

export const Reason = ({ title, text, image }: ReasonProps) => {
  const { colorMode } = useColorMode();

  const intl = useIntl();

  return (
    <StyledReason>
      <div className="text">
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{text}</p>
        <PseudoBox
          as={Link}
          borderBottom={`2px solid ${colors.cyanLight}`}
          display="inline-block"
          marginTop={gutters.xSmall}
          padding=".4rem .3rem"
          position="relative"
          transition="all .2s"
          zIndex={1}
          _after={{
            content: '""',
            display: 'block',
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            right: '100%',
            transition: 'all .2s',
            zIndex: -1,
          }}
          _hover={{
            boxShadow: shadows.light1,
            color: colors.text[colorMode],
            '&::after': {
              background: colors.cyanLight,
              right: 0,
            },
          }}
        >
          {intl.formatMessage({ id: 'why_neon_law.btn_text' })}{' '}
          <Box as="span" fontFamily="sans-serif">
            &nbsp;&rarr;
          </Box>
        </PseudoBox>
      </div>
      <div
        className="image"
        style={image ? { backgroundImage: `url(${image})` } : {}}
      ></div>
    </StyledReason>
  );
};

export default Reason;
