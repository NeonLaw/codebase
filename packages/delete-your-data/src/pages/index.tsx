import { FAQs } from '../components/index/faqs';
import { Hero } from '../components/hero';
import IndexLayout from '../layouts';
import React from 'react';
import { Seo } from '../components/seo';

const HomePage = () => {
  const title = 'Homepage';
  const description = 'Neon Law and its affiliates will find and ' +
    'delete your data on the Internet.';

  return (
    <IndexLayout>
      <Seo title={title} description={description} />
      <Hero />
      <FAQs />
    </IndexLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default HomePage;
