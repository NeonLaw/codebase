import { colors, gutters } from '../../themes/deleteYourData';

import { Link } from 'gatsby';
import React from 'react';
import { links } from './links';
import styled from '@emotion/styled';

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: ${gutters.normal} 0;

  @media(max-width: 540px) {
    justify-content: center;
  }

  a {
    position: relative;
    display: inline-block;
    color: inherit;
    text-decoration: none;
    z-index: 1 !important;

    &::after {
      content: "";
      position: absolute;
      bottom: -.6rem;
      left: 0;
      right: 100%;
      display: inline-block;
      height: 1px;
      background: ${colors.white};
      transition: all 0.4s cubic-bezier(0, 0.5, 0, 1);
    }

    &:hover,
    &:focus {
      color: ${colors.primary};
      transition: all .2s;

      &::after {
        /* width: 100%; */
        right: 0;
        background: ${colors.primary};
      }
    }

    &:not(:last-child) {
      margin-right: ${gutters.medium};

      @media(max-width: 540px) {
        margin-right: ${gutters.normal};
      }

      @media(max-width: 320px) {
        margin-right: ${gutters.small};
      }
    }
  }
`;

export const Nav = () => (
  <div className="row">
    <StyledNav role="navigation">
      {links.map(({ label, route }) => (
        <Link key={label} to={route}>
          {label}
        </Link>
      ))}
    </StyledNav>
  </div>
);
