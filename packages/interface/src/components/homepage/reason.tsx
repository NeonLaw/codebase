import { gutters, shadows, sizes } from '../../themes/neonLaw';

import Placeholder from '../../images/placeholder.jpg';
import React from 'react';
import { ReadMoreButton } from '../button';
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

export const Reason = ({ title, text, image }: ReasonProps): JSX.Element => {
  const intl = useIntl();

  return (
    <StyledReason>
      <div className="text">
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{text}</p>
        <ReadMoreButton href="#">
          {intl.formatMessage({ id: 'why_neon_law.btn_text' })}
        </ReadMoreButton>
      </div>
      <div
        className="image"
        style={image ? { backgroundImage: `url(${image})` } : {}}
      ></div>
    </StyledReason>
  );
};
