import React from 'react';
import styled from '@emotion/styled';

const StyledFAQ = styled.div`
  flex: 0 0 48%;
  margin-bottom: var(--gutter-large);
  padding: var(--gutter-normal) var(--gutter-small);
  background: linear-gradient(var(--black-light-1), var(--black-light));
  border-radius: 3rem;
  max-width: 500px;

  @media(max-width: 1020px) {
    min-width: 540px;
  }

  @media(max-width: 620px) {
    min-width: 400px;
  }

  @media(max-width: 540px) {
    text-align: center;
  }

  @media(max-width: 400px) {
    min-width: auto;
    flex: 0 0 100%;
  }

  .img {
    height: 7rem;

    &-container {
      display: inline-block;
      padding: var(--gutter-small-2) var(--gutter-small);
      margin: -30rem 0 var(--gutter-small-1); 
      background: linear-gradient(var(--black-light-1), var(--black-light));
      border-radius: 2rem;
    }
  }
`;

export interface FAQProps {
  title: string;
  text: string | JSX.Element;
  icon: string;
}

const FAQ = ({ title, text, icon }: FAQProps) => (
  <StyledFAQ>
    <div className="img-container">
      <img className="img" src={icon} alt={title} />
    </div>
    <h3>{title}</h3>
    {typeof text === 'string' ? <p>{text}</p> : text}
  </StyledFAQ>
);

export default FAQ;
