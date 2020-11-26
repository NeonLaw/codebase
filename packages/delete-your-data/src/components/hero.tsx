import { Link } from 'gatsby';
import Nav from './nav/nav';
import React from 'react';
import styled from '@emotion/styled';

const StyledHero = styled.header`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7));

  @media(max-height: 620px) {
    min-height: 540px;
  }

  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    @media(max-height: 600px) {
      top: 70%;
      transform: translateY(-70%);
    }

    @media(max-width: 640px) {
      left: 5%;
      right: 5%;
    }

    @media(max-width: 540px) {
      text-align: center;
    }
  }

  p {
    max-width: 620px;
    font-size: var(--font-size-normal-1);
    margin: var(--gutter-small-2) 0 var(--gutter-normal);

    @media (max-width: 900px) {
      max-width: 560px;
    }
  }

  span {
    @media(max-width: 613px) {
      display: none;
    }
  }
`;

const Hero = () => (
  <StyledHero>
    <Nav />
    <div className="bg-video">
      <video autoPlay loop muted playsInline>
        <source src="hero.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="row">
      <div className="text-box">
        <h1>Delete Your Data</h1>
        <p>
          Hundereds of data brokers are buying and selling your online data{' '}
          <span aria-hidden="true">&mdash;</span> without your consent. Do you
          want that to be removed? We can help.
        </p>
        <Link to="#" className="btn btn--cta">
          Get Started Now!
        </Link>
      </div>
    </div>
  </StyledHero>
);

export default Hero;
