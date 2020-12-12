import { DeleteYourDataLayout } from '../../layouts/deleteYourData';
import { FAQs } from '../../components/deleteYourData/faqs';
import { Hero } from '../../components/deleteYourData/hero';
import React from 'react';
import { Seo } from '../../components/seo';

const HomePage = () => {
  const title = 'Homepage';
  const description =
    'Neon Law and its affiliates will find and ' +
    'delete your data on the Internet.';

  return (
    <DeleteYourDataLayout>
      <Seo title={title} description={description} />
      <Hero />
      <FAQs />
    </DeleteYourDataLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default HomePage;
