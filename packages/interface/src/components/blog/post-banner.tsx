import { Heading, Text, useColorMode } from '@chakra-ui/core';
import {
  colors,
  gutters,
  shadows,
} from '@neonlaw/shared-ui/src/themes/neonLaw';

import { FormattedDate } from 'gatsby-plugin-intl';
import { Image } from '../image';
import { Link } from '@reach/router';
import React from 'react';
import { ReadMoreButton } from '@neonlaw/shared-ui/src/components/button';
import styled from '@emotion/styled';

const StyledPostBanner = styled(Link)`
  display: flex;
  border: 1px solid;
  box-shadow: ${shadows.light2};

  @media (max-width: 740px) {
    flex-direction: column;
    max-width: 400px;
  }

  .img {
    flex: 0 0 30%;
    min-height: 200px;
  }

  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }

  .text {
    padding: ${gutters.small};
    border-left: 1px solid;

    @media (max-width: 740px) {
      border-top: 1px solid #eee;
    }
  }
`;

export interface PostBannerProps {
  slug: string;
  title: string;
  date: Date;
  excerpt: string;
  featuredImage?: any;
  widescreen?: string;
}

export const PostBanner = ({
  slug,
  title,
  date,
  excerpt,
  featuredImage,
  widescreen,
}: PostBannerProps): JSX.Element => {
  const { colorMode } = useColorMode();
  return (
    <StyledPostBanner
      style={{
        backgroundColor: colors.background[colorMode],
        borderColor: colors.borders[colorMode],
      }}
      to={slug || '/'}
    >
      <div className="img">
        <Image
          aspectRatio={widescreen ? 2 : 16 / 9}
          src={featuredImage ? featuredImage : 'blog-featured-placeholder.jpg'}
          alt={title}
        />
      </div>
      <div className="text" style={{ borderColor: colors.borders[colorMode] }}>
        <Heading as="h3" fontWeight="400" marginBottom={gutters.xSmallOne}>
          {title}
        </Heading>
        <Text marginBottom={gutters.xSmallOne}>
          <FormattedDate value={new Date(date)} />
        </Text>
        <Text>{excerpt}</Text>
        <ReadMoreButton to={slug} />
      </div>
    </StyledPostBanner>
  );
};
